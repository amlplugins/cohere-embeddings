/**
 * @amlplugins/cohere-embeddings
 *
 * Thin namespaced re-export of the native cohere-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cohere Embed — multilingual & multimodal embeddings (embed-v4) with configurable dimensions.
 */

import * as _sdk from "cohere-ai";
export * from "cohere-ai";
export { _sdk as sdk };
export default _sdk;
