/**
 * @function external:jQuery.prototype.myPlugin
 * @arg {object|string} arg1 - Option or the name of sub method
 * @arg {string} [arg1.url='../../dist/php/ajax.php'] - Server side file such as PHP
 * @arg {string} [arg1.q='a'] - Keyword to search
 */
export default function myPlugin(arg1) {
  // サブメソッド実行に備えて、数の分からない引数をまとめて配列にする。
  // 第1引数はサブメソッド名なので、それだけは除外する。
  var subMethodArgs = Array.prototype.slice.call(arguments, 1);

  // メソッドチェーン持続のためにjQueryオブジェクトを返す
  return this.each(function() {
    // プラグインを適用済みなら、保存してあるはずのインスタンスを呼び出す
    var instance = $(this).data('my-plugin');

    if (instance && arg1 in instance && arg1.charAt(0) != '_') {
      // publicなサブメソッドを実行する
      instance[arg1].apply(instance, subMethodArgs);

    } else if (typeof arg1 === 'object' || !arg1) {
      // プラグインを適用し、インスタンスをdataに保存する
      $(this).data('my-plugin', new $.myPlugin(this, arg1));

    } else {
      // エラーとしてコンソールに表示される
      console.error('Sub-method "' +  arg1 + '" does not exist on $.myPlugin');
    }
  });
};