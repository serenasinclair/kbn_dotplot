export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/kbn_dotplot/kbn_dotplot'
      ]
    }
  });

}
