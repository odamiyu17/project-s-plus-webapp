import { createStart } from "@tanstack/react-start";
import {
  authMiddleware,
  supabaseRequestMiddleware,
} from "@/lib/auth-middleware";

// Global middleware for Supabase authentication.
export const startInstance = createStart(() => ({
  requestMiddleware: [supabaseRequestMiddleware],
  functionMiddleware: [authMiddleware],
}));