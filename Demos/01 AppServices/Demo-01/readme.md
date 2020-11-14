# Publish to App Service

Navigate to `./Properties/PublishProfile`

Add a file called `azure.pubxml` with the following content:

```xml
<Project>
    <PropertyGroup>
    <PublishProtocol>Kudu</PublishProtocol>
    <PublishSiteName>{Your App name}</PublishSiteName>
    <UserName>{Your FTP/deployment username}</UserName>
    <Password>{Your FTP/deployment password}</Password>
    </PropertyGroup>
</Project>
```

Execute:

```
dotnet publish /p:Configuration=Release /p:PublishProfile=Properties\PublishProfiles\azure.pubxml /p:Password=<password>
```

> Note: Make sure you use the published path

![deploy](_images/deploy-ext.jpg)
