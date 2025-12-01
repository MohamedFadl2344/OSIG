import axios from 'axios';

const API_URL = 'http://localhost:3000/v1/chat/completions';

export interface ImageGenerationResponse {
    id: string;
    choices: {
        message: {
            role: string;
            content: string;
            refusal?: string | null;
            reasoning?: string | null;
            images?: {
                type: string;
                image_url: {
                    url: string;
                };
            }[];
        };
    }[];
}

export const imggenAPI = {
    generateImage: async (prompt: string, model: string, numberOfImages: number = 1) => {
        try {
            const token = localStorage.getItem('token');
            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios.post<ImageGenerationResponse>(
                API_URL,
                {
                    model,
                    messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    modalities: ['image', 'text'],
                    stream: false,
                    n: numberOfImages,
                    max_tokens: 512  
                },
                {
                    headers
                }
            );

            return {
                success: true,
                data: response.data
            };
        } catch (error: any) {
            console.error('Image generation error:', error);
            return {
                success: false,
                message: error.response?.data?.error?.message || 'Failed to generate image'
            };
        }
    }
};
