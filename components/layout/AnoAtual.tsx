'use client';

import { useSyncExternalStore } from 'react';

const semAssinatura = () => () => {};

/** Ano do ©: sai do build e se corrige no navegador se o ano virou sem novo deploy. */
export function AnoAtual({ anoDoBuild }: { anoDoBuild: number }) {
  const ano = useSyncExternalStore(
    semAssinatura,
    () => new Date().getFullYear(),
    () => anoDoBuild,
  );
  return <>{ano}</>;
}
