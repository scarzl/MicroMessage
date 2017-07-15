function deleteBatch(basePath) {
	$("#mainForm").attr("action",basePath + "deleteBatchServlet.action");
	$("#mainForm").submit();
}