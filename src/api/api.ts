const BACKEND_URI = window['APPSETTING_API_ENDPOINT']; /* process.env.APPSETTING_API_ENDPOINT; */
console.log(`APPSETTING_API_ENDPOINT: ${BACKEND_URI}`);

import { ChatAppResponse, ChatAppResponseOrError, ChatAppRequest, Config } from "./models";
//import { useLogin, appServicesToken } from "../authConfig";

function getHeaders(idToken: string | undefined): Record<string, string> {
    var headers: Record<string, string> = {
        "Content-Type": "application/json"
    };
    // If using login and not using app services, add the id token of the logged in account as the authorization
    // if (useLogin && appServicesToken == null) {
    //     if (idToken) {
    //         headers["Authorization"] = `Bearer ${idToken}`;
    //     }
    // }

    return headers;
}

export async function askApi(request: ChatAppRequest, idToken: string | undefined): Promise<ChatAppResponse> {
    const body = JSON.stringify(request);
    console.log(`api.askApi -> ${body}`);
    const response = await fetch(`${BACKEND_URI}/ask`, {
        method: "POST",
        headers: getHeaders(idToken),
        body: body
    });

    const parsedResponse: ChatAppResponseOrError = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error(parsedResponse.error || "Unknown error");
    }

    return parsedResponse as ChatAppResponse;
}

export async function configApi(idToken: string | undefined): Promise<Config> {
    const response = await fetch(`${BACKEND_URI}/config`, {
        method: "GET",
        headers: getHeaders(idToken)
    });

    const json = await response.json();
    console.log(`api.configApi -> ${json}`);
    return json as Config;
}

export async function chatApi(request: ChatAppRequest, idToken: string | undefined): Promise<Response> {
    const body = JSON.stringify(request);
    console.log(`api.chatApi ->  ${body}`)
    return await fetch(`${BACKEND_URI}/chat`, {
        method: "POST",
        headers: getHeaders(idToken),
        body: body
    });
}

export function getCitationFilePath(citation: string): string {
    return `${BACKEND_URI}/content/${citation}`;
}
