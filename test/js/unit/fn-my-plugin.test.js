describe('$.fn.myPlugin', () => {
  it('should be jQuery object', () => {
    let foo = $('<div id="foo">');
    assert(typeof foo === 'object');
    assert(typeof $.fn.myPlugin == 'function');
    assert(foo.myPlugin() == foo);
  });
});
