import { defineMiddleware } from "astro:middleware";
import { handleAgentRequest } from "./lib/agentResponse";

export const onRequest = defineMiddleware((context, next) =>
  handleAgentRequest(context.request, () => Promise.resolve(next())),
);
