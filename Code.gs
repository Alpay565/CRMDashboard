function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Valeo CRM Dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
