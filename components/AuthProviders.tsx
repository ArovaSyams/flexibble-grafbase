"use client"

import {  getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProvider = async () => {
      const res = await getProviders();

      setProviders(res);
    }
  
    fetchProvider();
  }, []);
  

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider, i) => (
          <button key={i}>{provider.name}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders