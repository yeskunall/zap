(function zap(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    console.error(`⚡ zap requires a browser environment to run!`);
    process.exit(1);
  } else {
    // in this case, root is actually window
    root.zap = factory();
  }
}(this, () => {
  function apiSupport() {
    return navigator.getBattery;
  }

  if (!apiSupport()) {
    console.log(`Your browser doesn't support the BatteryStatus API! 😦`);
  }

  function _init() {
    console.log(`⚡ zap init!`);
  }

  return {
    init: _init,
  };
}));
