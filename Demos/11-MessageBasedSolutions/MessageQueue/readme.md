# Azure Queue Storage

[Azure Queue Storage](https://docs.microsoft.com/en-us/azure/storage/queues/)

[az storage queue](https://docs.microsoft.com/en-us/cli/azure/storage/queue?view=azure-cli-latest)

## Demo

Execute `create-queue.azcli` to create a storage account and queue

Create the application

```
dotnet new console -n QueueApp
cd QueueApp
dotnet build
```

Add Azure Storage

```
dotnet add package WindowsAzure.Storage --version 9.3.3
```

Execute the App

```
dotnet run Send this message
```

Check Result

```
az storage message peek --queue-name newsqueue --connection-string <connection-string>
```

Cleanup

```
az storage queue delete --name newsqueue --connection-string <connection-string>
```
