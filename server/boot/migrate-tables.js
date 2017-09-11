module.exports = function(app) {
  
  console.log("Migrate DB");
  
  var datasource = app.dataSources.mongoDs;
  
  datasource.automigrate('User', function(err) {
    if (err) throw err;
    console.log("User was migrated");
  });
  
  datasource.automigrate('Role', function(err) {
    if (err) throw err;
    console.log("Role was migrated");
  });
  
  datasource.automigrate('Post', function(err) {
    if (err) throw err;
    console.log("Post was migrated");
  });
  
  datasource.automigrate('ACL', function(err) {
    if (err) throw err;
    console.log("ACL was migrated");
  });
  
  datasource.automigrate('AccessToken', function(err) {
    if (err) throw err;
    console.log("AccessToken was migrated");
  });
  
  datasource.automigrate('RoleMapping', function(err) {
    if (err) throw err;
    console.log("RoleMapping was migrated");
  });
  
};