function save_options(){var a=document.getElementById("main-checkbox").checked;chrome.storage.sync.set({shouldWork:a},function(){}),chrome.tabs.query({active:!0,currentWindow:!0},function(a){var b="window.location.reload();";chrome.tabs.executeScript(a[0].id,{code:b})})}function restore_options(){chrome.storage.sync.get("shouldWork",function(a){var b=document.getElementById("main-checkbox");b&&(b.checked=a.shouldWork)})}document.addEventListener("DOMContentLoaded",function(){restore_options(),document.getElementById("main-checkbox").addEventListener("change",save_options,!1)});