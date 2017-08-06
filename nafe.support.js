"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "nafe",
              			"path": "nafe/nafe.js",
              			"file": "nafe.js",
              			"module": "nafe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/nafe.git",
              			"test": "nafe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if function is native.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var falzy = require("falzy");
var stringe = require("stringe");

var NATIVE_FUNCTION_PATTERN = /\{\s*\[\s*native\s+code\s*\]\s*\}$/i;

var nafe = function nafe(procedure) {
	/*;
                                     	@meta-configuration:
                                     		{
                                     			"procedure:required": "function"
                                     		}
                                     	@end-meta-configuration
                                     */

	if (falzy(procedure) || typeof procedure != "function") {
		return false;
	}

	try {
		return NATIVE_FUNCTION_PATTERN.test(stringe(procedure));

	} catch (error) {
		return false;
	}
};

module.exports = nafe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hZmUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJzdHJpbmdlIiwiTkFUSVZFX0ZVTkNUSU9OX1BBVFRFUk4iLCJuYWZlIiwicHJvY2VkdXJlIiwidGVzdCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRSwwQkFBMEIscUNBQWhDOztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxTQUFmLEVBQTBCO0FBQ3RDOzs7Ozs7OztBQVFBLEtBQUlMLE1BQU9LLFNBQVAsS0FBc0IsT0FBT0EsU0FBUCxJQUFvQixVQUE5QyxFQUEwRDtBQUN6RCxTQUFPLEtBQVA7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsU0FBT0Ysd0JBQXdCRyxJQUF4QixDQUE4QkosUUFBU0csU0FBVCxDQUE5QixDQUFQOztBQUVBLEVBSEQsQ0FHQyxPQUFPRSxLQUFQLEVBQWM7QUFDZCxTQUFPLEtBQVA7QUFDQTtBQUNELENBbkJEOztBQXFCQUMsT0FBT0MsT0FBUCxHQUFpQkwsSUFBakIiLCJmaWxlIjoibmFmZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm5hZmVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibmFmZS9uYWZlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm5hZmUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJuYWZlXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25hZmUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm5hZmUtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDaGVja3MgaWYgZnVuY3Rpb24gaXMgbmF0aXZlLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xyXG5cclxuY29uc3QgTkFUSVZFX0ZVTkNUSU9OX1BBVFRFUk4gPSAvXFx7XFxzKlxcW1xccypuYXRpdmVcXHMrY29kZVxccypcXF1cXHMqXFx9JC9pXHJcblxyXG5jb25zdCBuYWZlID0gZnVuY3Rpb24gbmFmZSggcHJvY2VkdXJlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJwcm9jZWR1cmU6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBwcm9jZWR1cmUgKSB8fCB0eXBlb2YgcHJvY2VkdXJlICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dHJ5e1xyXG5cdFx0cmV0dXJuIE5BVElWRV9GVU5DVElPTl9QQVRURVJOLnRlc3QoIHN0cmluZ2UoIHByb2NlZHVyZSApICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5hZmU7XHJcbiJdfQ==
//# sourceMappingURL=nafe.support.js.map
