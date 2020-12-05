# Deploy .NET Core Api using GitHub Actions

- Provisioning using Azure CLI
- Deploy using GitHub Actions

> Note: FoodApp is a seperate Git Repo: [https://github.com/ARambazamba/FoodApp](https://github.com/ARambazamba/FoodApp)

## Github Actions

Deploy Api using [GitHub Actions](https://github.com/Azure/actions)

```yaml
# Docs for the Azure Web Apps Deploy action: https://github.com/Azure/webapps-deploy
# More GitHub Actions for Azure: https://github.com/Azure/actions

name: Deploy FoodApi

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: windows-latest

    steps:
      - name: Checkout Code
      - uses: actions/checkout@master

      - name: Set up .NET Core
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: "5.0.x"

      - name: Install dependencies
        run: dotnet restore ${{ github.workspace }}/FoodApi/FoodApi.csproj

      - name: Build with dotnet
        run: dotnet build ${{ github.workspace }}/FoodApi/FoodApi.csproj --configuration Release

      - name: dotnet publish
        run: dotnet publish ${{ github.workspace }}/FoodApi/FoodApi.csproj -c Release -o ${{env.DOTNET_ROOT}}/foodapi

      - name: Azure Login
        uses: Azure/login@v1.1
        with:
          # Paste output of `az ad sp create-for-rbac` as value of secret variable: AZURE_CREDENTIALS
          creds: ""

      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v2
        with:
          app-name: "skillsapideploy"
          slot-name: "production"
          publish-profile: ${{ secrets.AzureAppService_PublishProfile_b314947fbe6546bf8a51d17b6e0c0a6a }}
          package: ${{env.DOTNET_ROOT}}/foodapi
```
