import 'babel-polyfill';
import { expect } from 'code';
import { script } from 'lab';
import incidencia from '../../../src/controllers/Incidentia';

const lab = script();
const { describe, it } = lab;

describe('incidencias', () => {
  it('should map incidencia', async () => {
    const incidencias = {
      '-LPquksnpiBlFMM8wIGM': {
        cause: 'merge conflicts2 in recent codebase',
        incidenciaName: 'app crash',
        priority: 'medium',
        reporter: 'emmy@gmail.com',
        severity: 'low',
        solution: 'roll back pr that was merged into master',
        solved: true,
      },
      '-LPqusQyWNfBjudw6GiK': {
        cause: 'merge conflicts2 in recent codebase',
        incidenciaName: 'app crash',
        priority: 'medium',
        reporter: 'emmy@gmail.com',
        severity: 'low',
        solution: 'roll back pr that was merged into master',
        solved: true,
      },
    };

    const expectedResult = [
      {
        id: '-LPquksnpiBlFMM8wIGM',
        cause: 'merge conflicts2 in recent codebase',
        incidenciaName: 'app crash',
        priority: 'medium',
        reporter: 'emmy@gmail.com',
        severity: 'low',
        solution: 'roll back pr that was merged into master',
        solved: true,
      },
      {
        id: '-LPqusQyWNfBjudw6GiK',
        cause: 'merge conflicts2 in recent codebase',
        incidenciaName: 'app crash',
        priority: 'medium',
        reporter: 'emmy@gmail.com',
        severity: 'low',
        solution: 'roll back pr that was merged into master',
        solved: true,
      },
    ];
    expect(incidencia.mapIncidencia(incidencias)).to.equal(expectedResult);
  });
});
export { lab };
export default lab;
