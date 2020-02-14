using System.Collections.Generic;
using System.Threading.Tasks;
using NutritionApp.API.Models;

namespace NutritionApp.API.Data
{
    public interface INutritionRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>>GetUsers();
         Task<User> GetUser(int id);
    }
}