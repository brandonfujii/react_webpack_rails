import reactIntegration from './integrations/react';

class IntegrationsManager {
  constructor() {
    this.integrations = {
      'react-component': reactIntegration.integrationWrapper,
    };
  }


  get(name) {
    // handle missing one here;
    return this.integrations[name];
  }

  register(name, integration) {
    this.integrations[name] = integration;
  }

  nodeResetAll() {
    Object.keys(this.integrations).forEach((integrationName) => {
      const resetFunction = this.get(integrationName).nodeReset;
      if (typeof(resetFunction) === 'function') {
        resetFunction();
      }
    });
  }
}

export default new IntegrationsManager;
