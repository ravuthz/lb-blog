module.exports = function(app) {
  
  console.log("Migrate DB");
  
  app.dataSources.mysqlDs.automigrate('User', function(err) {
    if (err) throw err;
    console.log("User was migrated");
  });
  
  app.dataSources.mysqlDs.automigrate('Role', function(err) {
    if (err) throw err;
    console.log("Role was migrated");
  });
  
  app.dataSources.mysqlDs.automigrate('Post', function(err) {
    if (err) throw err;
    console.log("Post was migrated");
  });
  
  app.dataSources.mysqlDs.automigrate('ACL', function(err) {
    if (err) throw err;
    console.log("ACL was migrated");
  });
  
  app.dataSources.mysqlDs.automigrate('AccessToken', function(err) {
    if (err) throw err;
    console.log("AccessToken was migrated");
  });
  
  app.dataSources.mysqlDs.automigrate('RoleMapping', function(err) {
    if (err) throw err;
    console.log("RoleMapping was migrated");
  });
  
};