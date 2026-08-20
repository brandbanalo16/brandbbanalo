export type MailHandlerOk = { ok: true; message?: string };
export type MailHandlerErr = { ok: false; error?: string };
export type MailHandlerResponse = MailHandlerOk | MailHandlerErr;

export async function submitToMailHandler(
  payload: Record<string, string>,
  endpoint?: string,
): Promise<MailHandlerResponse> {
  // Use provided endpoint, or env var, or fallback to relative path
  let finalEndpoint = endpoint || process.env.NEXT_PUBLIC_MAIL_API || "/php/mail-handler.php";
  
  // If we are on a live site but the endpoint is localhost, override it to use the relative path
  if (typeof window !== "undefined" && 
      !window.location.hostname.includes("localhost") && 
      finalEndpoint.includes("localhost")) {
    finalEndpoint = "/php/mail-handler.php";
  }

  const fd = new FormData();
  for (const [k, v] of Object.entries(payload)) fd.append(k, v);

  try {
    const res = await fetch(finalEndpoint, { method: "POST", body: fd });
    
    if (!res.ok) {
      return {
        ok: false,
        error: `Server error (${res.status}). Please try again later.`,
      };
    }

    const json = await res.json() as MailHandlerResponse;
    return json;
  } catch (err) {
    console.error("Mail fetch error:", err);
    return {
      ok: false,
      error: finalEndpoint.includes("localhost") 
        ? "Could not connect to the local mail server. Make sure 'npm run php' is running."
        : "Could not send message. Please check your internet connection and try again.",
    };
  }
}


