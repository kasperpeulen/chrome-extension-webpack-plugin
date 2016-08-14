import fs from 'fs'
import _ from 'lodash'

//////////
// Merge manifest.json with name, description and version from package.json
export default function(manifest, {paths}) {
  const packageConfig = JSON.parse(fs.readFileSync(paths.appPackageJson, 'utf8'));

  manifest = _.merge({}, manifest, _.pick(packageConfig, 'name', 'description', 'version'));

  return {manifest}
}
