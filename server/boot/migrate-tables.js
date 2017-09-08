module.exports = function(app) {
  
  console.log("Migrate DB");
  
  app.dataSources.mongoDs.automigrate('User', function(err) {
    if (err) throw err;
    console.log("User was migrated");
  });
  
  app.dataSources.mongoDs.automigrate('Role', function(err) {
    if (err) throw err;
    console.log("Role was migrated");
  });
  
  app.dataSources.mongoDs.automigrate('Post', function(err) {
    if (err) throw err;
    console.log("Post was migrated");
  });
  
  app.dataSources.mongoDs.automigrate('ACL', function(err) {
    if (err) throw err;
    console.log("ACL was migrated");
  });
  
  app.dataSources.mongoDs.automigrate('AccessToken', function(err) {
    if (err) throw err;
    console.log("AccessToken was migrated");
  });
  
  app.dataSources.mongoDs.automigrate('RoleMapping', function(err) {
    if (err) throw err;
    console.log("RoleMapping was migrated");
  });
  
};