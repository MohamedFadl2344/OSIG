import emailjs from '@emailjs/browser';

interface EmailParams {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
}

class EmailService {
    private serviceId: string;
    private templateId: string;
    private publicKey: string;
    private initialized: boolean = false;

    constructor() {
        this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
        this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
        this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    }

    private init(): void {
        if (!this.initialized && this.publicKey) {
            emailjs.init(this.publicKey);
            this.initialized = true;
        }
    }

    private validateConfig(): boolean {
        if (!this.serviceId || !this.templateId || !this.publicKey) {
            console.error('EmailJS configuration is missing. Please check your environment variables.');
            return false;
        }
        return true;
    }

    private sanitizeInput(input: string): string {
        return input
            .trim()
            .replace(/[<>]/g, '')
            .substring(0, 5000);
    }

    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async sendEmail(params: EmailParams): Promise<{ success: boolean; message: string }> {
        try {
            if (!this.validateConfig()) {
                return {
                    success: false,
                    message: 'Email service is not configured properly'
                };
            }

            if (!this.validateEmail(params.from_email)) {
                return {
                    success: false,
                    message: 'Invalid email address'
                };
            }

            this.init();

            const sanitizedParams = {
                from_name: this.sanitizeInput(params.from_name),
                from_email: this.sanitizeInput(params.from_email),
                subject: this.sanitizeInput(params.subject),
                message: this.sanitizeInput(params.message)
            };

            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                sanitizedParams
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'Email sent successfully!'
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to send email. Please try again.'
                };
            }
        } catch (error: any) {
            console.error('EmailJS Error:', error);

            if (error.text) {
                return {
                    success: false,
                    message: `Error: ${error.text}`
                };
            }

            return {
                success: false,
                message: 'An unexpected error occurred. Please try again later.'
            };
        }
    }
}

export const emailService = new EmailService();
export type { EmailParams };
