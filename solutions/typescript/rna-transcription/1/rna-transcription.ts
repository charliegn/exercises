
export function toRna(dna: string): string {
  if (!/^[CGAT]*$/.test(dna)) {
    throw new Error('Invalid input DNA.');
  }

  const arrDNA = dna.split('');
  const rna = arrDNA.map((v, i) => {
    switch (v) {
      case 'C': return arrDNA[i] = 'G';
      case 'G': return arrDNA[i] = 'C';
      case 'A': return arrDNA[i] = 'U';
      case 'T': return arrDNA[i] = 'A';
    }
  });

  return rna.join('');
}
