function protocolNumber() {
  var now = new Date();
  var val = Utilities.formatDate(now, 'America/Sao_Paulo', 'yyyyMMddHHmmss');
  return val;
}