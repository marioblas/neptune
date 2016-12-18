import React from 'react';
import AuthEnsureRole from '/client/modules/accounts/containers/auth-ensure-role';

const Secrets = () => (
  <AuthEnsureRole roles={['root', 'admin']}>
    <div className="secrets">
      <h2>Secrets page</h2>
      <p>This page is visible for admin users only...</p>
      <AuthEnsureRole roles="root" silent>
        <p>Psst! but this paragraph is visible just for the root user!</p>
      </AuthEnsureRole>
    </div>
  </AuthEnsureRole>
);

Secrets.propTypes = {};

export default Secrets;
