module.exports = function(app) {

    console.log("Migrate DB");

    var allModels = ['User', 'Role', 'Post', 'ACL', 'AccessToken', 'RoleMapping'];

    var datasource = app.dataSources.mongoDs;

    datasource.isActual(allModels, function(error, actual) {
        if (!actual) {
            datasource.autoupdate(allModels, function(err) {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
        }
    });

};