using System;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;

namespace CosmosEF
{
    class Program
    {
        static async void Main(string[] args)
        {
            var connectionString = "";
            var client = new CosmosClientBuilder(connectionString).Build();

            var foodContainer = client.GetContainer("fooddb", "food");

            var f = new FoodItem{id=99,name="Cannelloni",  price = 9, calories=220};

            await foodContainer.CreateItemAsync(f);

            // Can write raw SQL, but the iteration is a little annoying. 
            var iterator = foodContainer.GetItemQueryIterator("SELECT * FROM c WHERE c.id = '852ad197-a5f1-4709-b16d-5e9019d290af' " +
                                                                            "AND c.address.zipCode = '90210'");
            while (iterator.HasMoreResults)
            {
                foreach (var item in (await iterator.ReadNextAsync()).Resource)
                {
                    person = item;
                }
            }

            // If you prefer Linq
            person = foodContainer.GetItemLinqQueryable(allowSynchronousQueryExecution: true)
                                        .Where(p => p.Id == Guid.Parse("852ad197-a5f1-4709-b16d-5e9019d290af"))
                                        .ToList().First();
        }
    }
}
