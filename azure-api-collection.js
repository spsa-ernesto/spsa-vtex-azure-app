const global = require('./global');
var unirest = require('unirest');


function ApiGetFileContent(organizacion, proyecto, repoId, pathFile, rama, token) {
    var Response = unirest.get(global.AZURE_ROOT
                             + organizacion
                             + "/" + proyecto
                             + "/_apis/git/repositories/"
                             + repoId
                             + "/items")
        .queryString("path", pathFile)
        .queryString("versionDescriptor.versionType", "branch")
        .queryString("versionDescriptor.version", rama)
        .queryString("api-version", global.VERSION_API)
        .header("Authorization", token)
        .asString()
        .getBody();
    return Response;
}

