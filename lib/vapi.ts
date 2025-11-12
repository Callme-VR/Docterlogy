import Vapi from "@vapi-ai/web";

// Check if environment variables are defined
const vapiApiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;

if (!vapiApiKey) {
  console.error("NEXT_PUBLIC_VAPI_API_KEY is not defined in environment variables");
  // We don't throw an error here to allow the app to load, but the VAPI calls will fail
}

// Initialize VAPI with the API key if it exists
export const vapi = vapiApiKey ? new Vapi(vapiApiKey) : {
  on: () => {},
  off: () => {},
  start: async () => { 
    throw new Error("VAPI API key not configured. Please set NEXT_PUBLIC_VAPI_API_KEY in your environment variables.");
  },
  stop: () => {}
} as any;