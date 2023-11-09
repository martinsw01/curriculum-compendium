# Noetherian and Irreducible Spaces

??? definition "Definition 3.7"
	## Noetherian and Irreducible Spaces
	Let $X$ be a topological space.
	=== "Noetherian"
		$X$ is called noetherian if closed subsets satisfies
		[d.c.c.](../../noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#d12)
		
		Thus, the open subsets satisfies the
		[a.c.c.](../../noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#d12).
		For $X=\Spec R$, this induces ascending chains of ideals.
		
	=== "Irreducible"
		$X$ is called irreducible if $X\neq \emptyset$, and cannot be written as the union of two
		closed proper subsets. This implies connectedness.


??? example "Example 3.8"
	1. $\R^n$ and $\C^n$ are not Noetherian.
	2. $|X| < \infty \implies X$ is Noetherian.
	3. $|X| = 1 \implies X$ is irreducible.
	4. $|K|=\infty \implies K^1$ the affine line is irreducible.


??? theorem "Theorem 3.9"
	## Noether property of the Zariski topology
	=== "Theorem"
		=== "a)"
			Let $X\subseteq K^n$ be a set of points equipped with the Zariski-topology.
			
			$$\implies X \text{ is Noetherian}$$
			
		=== "b)"
			Let $R$ be a Noetherian ring and $X\subseteq \Spec R$ equipped with the Zariski-topology.
			
			$$\implies X \text{ is Noetherian}$$
	=== "Proof"
		=== "a)"
			Assume without loss of generality that $X=K^n$.
			
			Let $\{X_i\}$ be a descending sequence of closed sets in $X$.
			
			Then, $\I(X_i)$ is an ascending sequence of ideals in $K[\underline x]$, which is Noehterian.
			It must therefore stabilize.
			Hence, the chain $\{X_i\}=\{\V(\I(X_i))\}$ must stabilise.
			
		=== "b)"
			Assume without loss of generality that $X=\Spec R$.
			
			Let $\{X_i\}$ be a descending sequence of closed sets in $X$.
			
			Then, $\I(X_i)$ is an ascending sequence of ideals in $R$, which is Noehterian.
			It must therefore stabilize.
			Hence, the chain $\{X_i\}=\{\V(\I(X_i))\}$ must stabilise.