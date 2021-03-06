import { __extends } from "tslib";
import { GetDocumentAnalysisRequest, GetDocumentAnalysisResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDocumentAnalysisCommand, serializeAws_json1_1GetDocumentAnalysisCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p>
 *          <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier
 *             (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a
 *          completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
 *             <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation,
 *          first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *          If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier
 *             (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p>
 *          <p>
 *             <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following
 *          types of information are returned: </p>
 *          <ul>
 *             <li>
 *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
 *             <code>Block</code> object and a VALUE <code>Block</code> object. For example,
 *             <i>Name: Ana Silva Carolina</i> contains a key and value.
 *             <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
 *             the value.</p>
 *             </li>
 *             <li>
 *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL
 *             <code>Block</code> object is returned for each cell in a table.</p>
 *             </li>
 *             <li>
 *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects.
 *             All lines and words that are detected in the document are returned (including text that doesn't have a
 *             relationship with the value of the <code>StartDocumentAnalysis</code>
 *                   <code>FeatureTypes</code> input parameter). </p>
 *             </li>
 *          </ul>
 *
 *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables.
 *          A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element,
 *          including the selection status.</p>
 *
 *
 *
 *          <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are
 *          returned. If there are more results than specified in <code>MaxResults</code>, the value of
 *             <code>NextToken</code> in the operation response contains a pagination token for getting
 *          the next set of results. To get the next page of results, call
 *             <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request
 *          parameter with the token value that's returned from the previous call to
 *             <code>GetDocumentAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
 */
var GetDocumentAnalysisCommand = /** @class */ (function (_super) {
    __extends(GetDocumentAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDocumentAnalysisCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetDocumentAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TextractClient";
        var commandName = "GetDocumentAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentAnalysisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDocumentAnalysisCommand(input, context);
    };
    GetDocumentAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDocumentAnalysisCommand(output, context);
    };
    return GetDocumentAnalysisCommand;
}($Command));
export { GetDocumentAnalysisCommand };
//# sourceMappingURL=GetDocumentAnalysisCommand.js.map