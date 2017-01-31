import React from 'react';
import AuthEnsureRole from '/client/modules/accounts/containers/auth-ensure-role';
import H1 from '/client/ui/h1';

const Secrets = () => (
  <AuthEnsureRole roles={['root', 'admin']}>
    <div className="secrets">
      <H1>Secrets page</H1>
      <p>This page is only accessible to admin users... 🔒</p>
      <AuthEnsureRole roles="root" silent>
        <p>Psst! but this paragraph is available just for the root user! 🕵</p>
      </AuthEnsureRole>
    </div>
  </AuthEnsureRole>
);

Secrets.propTypes = {};

export default Secrets;
