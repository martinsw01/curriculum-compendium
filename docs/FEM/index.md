# Compatible Finite Elements for Problems in Mixed Form

## Content

The lecture will be organised around the following outline:
	
1. Introduction: a few model problems
    - the Poisson problem
    - Maxwell problems: time-dependent and time-harmonic
    - the de Rham sequence and the Hodge-Laplacian problem

2. First order compatible Finite Elements on simplicial meshes
    - structure-preserving discrete framework
    - discrete Hodge-Helmholtz decompositions
    - commuting projections
    - nodal and edge Finite Elements
    - geometric projections

3. Theory of compatible FEM approximation of Hilbert complexes
    - closed Hilbert complexes
    - FEM approximations
    - Well-posedness theory
    - Stability through stable commuting projections

4. High order compatible finite elements on multi-patch domains
    - Tensor-product polynomials on cartesian cells
    - geometric degrees of freedom and polynomial bases
    - finite elements on curved cells
    - finite elements on multipatch domains

5. Study of the time-dependent Maxwell equations
    - Well-posedness of Maxwell’s equations
    - Structure-preserving approximation

6. Broken-FEEC approximations
    - broken spaces and conforming projection operators
    - structure-preserving approximations with broken spaces
    - locality of broken-FEEC operators

## Previous knowledge expected

Basic knowledge in Analysis, Vector Analysis, Functional Analysis and Partial Differential Equations is expected.
Having followed a lecture on Numerical Methods for Partial Differential Equations is a plus.

## Objective

Students will be able to analyse several model problems of physical importance and their approximation by mixed finite
element methods. 

They will know how these problems can be expressed within a de Rham complex, and what are the guiding principles of
compatible finite element methods which preserve this structure at the discrete level. In particular they will be able
to study some key stability and accuracy properties of these compatible finite element methods.

Students will also learn to use a python finite element library to solve several model electromagnetic problems, and
they should be able to derive by themselves the building blocks of such compatible finite element methods.