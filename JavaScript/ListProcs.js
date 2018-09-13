//
// ListProcs.js
//
// Walk the current list of processes
//
// OSR Open Systems Resources, inc.
//
// http://www.osr.com
// http://www.osronline.com
//
//
// To run:
//  
//   .load jsprovider.dll
//   .scriptload ListProcs.js
//   dx Debugger.State.Scripts.ListProcs.Contents.ListProcs()
//
function ListProcs() {

    // Get easy access to the debug output method
    var dbgOutput = host.diagnostics.debugLog;

    dbgOutput("List Processes!\n\n");

    var processes = host.currentSession.Processes;

    for (var process of processes)
    {
        dbgOutput("Found Process:\n");
        dbgOutput("\tName : ", process.Name, "\n");
        dbgOutput("\tId   : ", process.Id, "\n");
    }

}