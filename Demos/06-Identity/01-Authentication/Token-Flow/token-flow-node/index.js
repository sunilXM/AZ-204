async function doAuth() {
  const config = {
    auth: {
      clientId: "024bf89c-83e1-45b5-8797-f013cf920cc5",
      authority: "https://login.microsoftonline.com/common/",
      redirectUri: "http://localhost:8080",
    },
  };
  const client = new Msal.UserAgentApplication(config);
  const request = {
    scopes: ['user.read'],
  };

  //Login -> Get ID Token
  const loginResponse = await client.loginPopup(request);
  logAndShow("Login Request", loginResponse);

  //Get AccessToken
  const tokenResponse = await client.acquireTokenSilent(request);
  logAndShow("Token Response", tokenResponse);

  //Read Profile
  //Notice beta endpoint with extended profile info
  const qryProfile = "https://graph.microsoft.com/beta/me";
  const profileResp = await fetch(qryProfile, {
    headers: {
      Authorization: "Bearer " + tokenResponse.accessToken,
    },
  });
  const profile = await profileResp.json();
  logAndShow("Profile", profile);

  //Call Sharepoint using Graph -> SharePoint REST API v2
  const spTenant = "integrationsonline";
  const spScope = {
    scopes: ['Sites.ReadWrite.All'],
  };
  const spTokenResponse = await client.acquireTokenSilent(spScope);
  logAndShow("Token Response", spTokenResponse);

  const qrySPLists = `https://graph.microsoft.com/v1.0/sites/${spTenant}.sharepoint.com/lists`;
  const listResp = await fetch(qrySPLists, {
    headers: {
      Authorization: "Bearer " + spTokenResponse.accessToken
    },
  });
  const lists = await listResp.json();
  logAndShow("Lists", lists.value);
}

function logAndShow(lbl, msg) {
  console.log(`${lbl}:`, msg);
  document.getElementById("result").innerHTML = JSON.stringify(msg);
}
