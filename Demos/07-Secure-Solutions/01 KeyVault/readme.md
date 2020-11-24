# Key Vault

Create Key Vault & Get Key

```
az keyvault create \
 --resource-group <resource-group> \
 --name <your-unique-vault-name>

$key = Add-AzureKeyVaultKey -VaultName 'contoso' -Name 'MyFirstKey' -Destination 'HSM'
```

## Additional Labs & Walkthroughs

[Externalize the configuration of an ASP.NET app by using an Azure key vault](https://docs.microsoft.com/en-us/learn/modules/aspnet-configurationbuilder/)
