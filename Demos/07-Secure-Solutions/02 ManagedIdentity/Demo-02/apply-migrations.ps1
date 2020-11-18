# Delete old migrations
Remove-Item Migrations -r
# Recreate migrations
dotnet ef migrations add InitialCreate

# Set connection string to production database - use only one

# PowerShell
$env:ConnectionStrings:MyDbConnection='Server=tcp:az-204-managed-identity-8811.database.windows.net,1433;Database=coreDB;User ID=sqladmin;Password=TiTp4lab1234@;Encrypt=true;Connection Timeout=30;'

# CMD (no quotes)
Set-Variable ConnectionStrings:MyDbConnection=Server=tcp:az-204-managed-identity-8811.database.windows.net,1433;Database=coreDB;User ID=<username>;Password=<password>;Encrypt=true;Connection Timeout=30;

# Bash (no quotes)
export ConnectionStrings__MyDbConnection=Server=tcp:az-204-managed-identity-8811.database.windows.net,1433;Database=coreDB;User ID=<username>;Password=<password>;Encrypt=true;Connection Timeout=30;

# Run migrations -> Make sure you have enabled your IP in the firewall
dotnet ef database update
