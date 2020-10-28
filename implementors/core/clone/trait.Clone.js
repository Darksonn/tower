(function() {var implementors = {};
implementors["tower"] = [{"text":"impl&lt;L:&nbsp;Clone&gt; Clone for ServiceBuilder&lt;L&gt;","synthetic":false,"types":[]}];
implementors["tower_layer"] = [{"text":"impl Clone for Identity","synthetic":false,"types":[]},{"text":"impl&lt;Inner:&nbsp;Clone, Outer:&nbsp;Clone&gt; Clone for Stack&lt;Inner, Outer&gt;","synthetic":false,"types":[]}];
implementors["tower_test"] = [{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Spawn&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; Clone for Mock&lt;T, U&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()