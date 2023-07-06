import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Moi Laura, Haluatko iso seksi?");
};

serve(handleRequest, { port: 7777 });
