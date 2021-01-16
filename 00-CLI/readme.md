# Implement solutions that use virtual machines

## Azure CLI

[Azure CLI Reference](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest)

[Azure CLI Query](https://docs.microsoft.com/en-us/cli/azure/query-azure-cli?view=azure-cli-latest)

[JMESPath Documentation](http://jmespath.org/)

[Azure Cloud Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview#:~:text=Azure%20Cloud%20Shell%20is%20an,work%2C%20either%20Bash%20or%20PowerShell.&text=Direct%20link%3A%20Open%20a%20browser,%3A%2F%2Fshell.azure.com.)

## Extensions

[Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

[Azure CLI Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli)

`Azure Account` and `Azure CLI Tools` connect to `Cloud Shell`

![cloud-shell](_images/cloud-shell.png)

## Install Azure CLI

Install Chocoolatey in an elevated Prompt:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Install Azure CLI in an elevated Prompt:

```
choco install azure-cli
```

> Note: To install Azure CLI in Linux (ie. WSL) execute `install-az-cli-linux.sh`

## Getting Started

Log In:

```bash
az login
```

Try at cmd - use ctrl + d to exit:

```
az interactive
```

> Note: You can also use: `F1 - Open Bash in Cloud Shell` using Azure Account Extension

![open](_images/azure-open.png)

List available extensions:

```bash
az extension list-available --output table
az extension add --name <extension-name>
```

Create an App Service to host a Web App:

```bash
rnd=$RANDOM
grp=az204-appservice-$rnd
appPlan=appservice-$rnd
web=foodweb-$rnd
loc=westeurope

# create a resource group
az group create -n $grp -l $loc

# create an App Service plan
az appservice plan create -n $appPlan -g $grp --sku B2
```

## Troubleshoot CLI

Select Directory:

https://shell.azure.com/

In my case issue resolved by reverting Azure Account extension version to 0.8.11.

## Additional Labs & Walkthroughs

[Control Azure services with the CLI](https://docs.microsoft.com/en-us/learn/modules/control-azure-services-with-cli/)
