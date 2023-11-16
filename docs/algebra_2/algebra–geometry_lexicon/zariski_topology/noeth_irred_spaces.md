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
	=== "a)"
		Let $X\subseteq K^n$ be a set of points equipped with the Zariski-topology.
		
		$$\implies X \text{ is Noetherian}$$
		
	=== "b)"
		Let $R$ be a Noetherian ring and $X\subseteq \Spec R$ equipped with the Zariski-topology.
		
		$$\implies X \text{ is Noetherian}$$

	??? proof
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


??? theorem "Theorem 3.10"
	## Irreducible subsets <a id="t310"></a>

	Let $I = \I(X)$.

	=== "a)"
		$$X \subseteq K^n \text{ is irreducible } \iff \I(X) \text{ is a prime ideal}$$
	=== "b)"
		$$X \subseteq \Spec R \text{ is irreducible } \iff \I(X) \text{ is a prime ideal}$$

	??? proof
		=== "a)"
			Let $\V:=\V_K$ and $\I:=\I_{K[\underline x]}$ as defined in respectively
			[D.1.6](../../hilberts_nullstellensatz/3nullstellensatz_1/#d115) and
			[D.1.15](../../hilberts_nullstellensatz/4nullstellensatz_2/#d115).

			=== "$\implies$"
				First of all, $X$ being irreducible implies $X \neq \emptyset$ and
				$\I(X) \properideal K[\underline x]$.

				$\begin{align*}
					\text{Let } &f_1, f_2 \in K[\underline x] \text{ s.t.} \\
					& f_1 f_2 \in I
				\end{align*}$

				$$
				\begin{align*}
					&\implies X \subseteq \V(f_1 f_2) = \V(f_1) \cup \V(f_2) \\
					&\implies \left(X \cap \V(f_1)\right) \cup \left(X \cap \V(f_2)\right) \\
					&\overset{X \text{ irreducible}}{\implies} X = X \cap \V(f_1), & i \in \{1, 2\} \\
					&\implies f_i \in I \\
					&\implies I \text{ is prime} & & \square
				\end{align*}
				$$

			=== "$\impliedby$"
				As $I$ is a prime ideal, $X\neq \emptyset$.

				Assume $X = X_1 \cap X_2$ is a union of two closed subsets in X.

				$$
				\begin{align*}
					&\implies X_i = X \cap \V(I_i) & I_i \ideal K[\underline x] \\
					&\implies X \subseteq \V(I_1) \cup \V(I_2)
					\eqhref{../affine_varieties/#p31}{P.3.1} \V(I_1 \cap I_2) \\
					&\implies I_1 \cap I_2 \subseteq \I(X) = I \\
					&\implies \exists\ i \in\{1, 2\} : I_i \subseteq I & \text{as } I \text{ is prime} \\
					&\implies X \subseteq \V(I_i) \\
					&\implies X = X \cap \V(I_i) = X_i && \square
				\end{align*}
				$$

		=== "b)"

			Let $\V:=\V_{\Spec R}$ and $\I:=\I_R$ as defined in
			[D.3.5](../spectra/#d35).
			
			=== "$\implies$"
				First of all, $X$ being irreducible implies $X \neq \emptyset$ and
				$\I(X) \properideal R$.

				$\begin{align*}
					\text{Let } &a_1, a_2 \in R \text{ s.t.} \\
					& a_1 a_2 \in I
				\end{align*}$

				$$
				\begin{align*}
					&\implies X \subseteq \V(a_1 a_2) = \V(a_1) \cup \V(a_2) \\
					&\implies \left(X \cap \V(a_1)\right) \cup \left(X \cap \V(a_2)\right) \\
					&\overset{X \text{ irreducible}}{\implies} X = X \cap \V(a_1), & i \in \{1, 2\} \\
					&\implies a_i \in I \\
					&\implies I \text{ is prime} & & \square
				\end{align*}
				$$

			=== "$\impliedby$"
				As $I$ is a prime ideal, $X\neq \emptyset$.

				Assume $X = X_1 \cap X_2$ is a union of two closed subsets in X.

				$$
				\begin{align*}
					&\implies X_i = X \cap \V(I_i) & I_i \ideal R \\
					&\implies X \subseteq \V(I_1) \cup \V(I_2)
					\eqhref{../affine_varieties/#p31}{P.3.1} \V(I_1 \cap I_2) \\
					&\implies I_1 \cap I_2 \subseteq \I(X) = I \\
					&\implies \exists\ i \in\{1, 2\} : I_i \subseteq I & \text{as } I \text{ is prime} \\
					&\implies X \subseteq \V(I_i) \\
					&\implies X = X \cap \V(I_i) = X_i && \square
				\end{align*}
				$$


??? theorem "Theorem 3.11"
	## Decomposition into irreducibles <a id="t311"></a>

	Let $X$ be a Noetherian topological space.

	=== "a)"
		There are closed irreducible subsets $Z_1, ..., Z_n \subseteq X$ with
		$n \in \N_0$ and $Z_i \subsetneq Z_j\ \forall\ i\neq j$ s.t.

		$$X = \bigcup_{i=1}^n Z_i$$

	=== "b)"
		If the closed irreducible $Z_1, ..., Z_n \subseteq X$ satisfies **a)**,
		then every irreducible subset $Z\subseteq X$ is contained in a $Z_i$.

	=== "c)"
		If the closed irreducible $Z_1, ..., Z_n \subseteq X$ satisfies **a)**,
		then they are the maximal irreducible subsets of $X$.

		Moreover, they are uniquelly determined up to order.

	??? proof
		=== "a)"
			As $X$ is Noetherian, every nonempty closed subset of $X$ contains a minimal closed subset
			([AoC](https://en.wikipedia.org/wiki/Axiom_of_choice)).

			Assume $X$ has a closed subset $Y \subseteq Y$ that is not a finite union of closed
			irreducible subsets. Without loss of generality, we may assume $Y$ to be minimal.

			By assumption, $Y = Y_1 \cap Y_2$ with $Y_1, Y_2 \subsetneq Y$ closed subsets. However, as $Y$ is minimal,
			$Y_i$ must be a finite union of closed irreducible subsets. Thus, so is $Y$, which is a contradiction.

			Thus, $X=\bigcup_{i=1}^n Y_i$ is a finite union of closed irreducible subsets. Assuming the $Y_i$s to be
			distinct, and removeing the $Y_i$ s.t. $Y_i \subseteq Y_j$, we get a decomposition described in the theorem.

		=== "b)"
			Let $Z \subseteq X$ be an irreducible subset.

			$$
			\begin{align*}
				&\implies Z = \bigcup_{i=1}^n (Z \cap Z_i) \\
				&\overset{Z \text{ irred.}}{\implies} \exists\ i \in \{1, ..., n\} : Z \subseteq Z_i \\
			\end{align*}
			$$

		=== "c)"
			Let $Z\subseteq X$ be a maximal irreducible subset.

			$\begin{align*}
				\overset{b)}{\implies} Z \subseteq Z_i
				\overset{\text{maximal}}{\implies} Z=Z_i
			\end{align*}$

			Thus, the maximal irreducible subsets are among the $Z_i$s. It remains to be shown that
			they are the only ones:

			Assume there exists a $Z_i \subseteq Z$. As $Z$ is irreducible, by **b)**, $\exists\ j$ s.t.
			$Z \subseteq Z_j$. Then, from **a)**, we get $Z_i = Z = Z_j.\tab\square$



??? definition "Definnition 3.12"
	## Irreducible components
	
	The $Z_i$ in [T.3.11](#decomposition-into-irreducibles) are called irreducible components.


??? example "Example 3.13"
	Let $f\in K[\underline x]\backslash K$.

	$$
	\begin{align*}
		&\implies f = \prod_{i=1}^r p_i^{e_i},
		& p_i \nsim p_j \iff i \neq j \text{ irreducible polynomials} \\
		&\implies \V_{K^n}(f) = \bigcup_{i=1}^r \V_{K^n}(p_i)
	\end{align*}
	$$


??? corollary "Corollary 3.14"
	## Minimal prime ideals <a id="c314"></a>
	Let $R$ be a Noetherian ring.

	=== "a)"
		$$R \text{ has finitely many prime ideals } P_1, ..., P_n \ideal R.$$
	=== "b)"
		$$\text{Every prime ideal contains a minimal prime ideal.}$$
	=== "c)"
		$$\nil(R) = \bigcap_{i=1}^n P_i = \sqrt{\{0\}}$$

	=== "d)"
		Let $I \ideal R$ be an ideal.

		$$\V_{\Spec R}(I) \text{ contains finitely many minimal elements } Q_1, ..., Q_n.$$

		$$\sqrt I = \bigcap_{i=1}^n Q_i$$

	??? proof
		=== "a)"
			By [P.3.6e)](../spectra/#p36) and [T.3.10b)](#t310) (minimal) prime ideals in $R$ cooresponds to
			(maximal) closed irreducible subsets of $\Spec R$.

			Then, by [T.3.11c)](#t311) there exists only finitely many minimal prime ideals. $\tab\square$

		=== "b)"
			Follows from [T.3.11b)](#t311) $\tab\square$

		=== "c)"
			From [C.1.12](../../hilberts_nullstellensatz/4nullstellensatz_2/#c112), it follows that

			$$\nil(R) = \bigcap_{P\in\Spec R}\!\!\!\!\! P\ \ \overset{a)}{=} \bigcap_{i=1}^n P_i \tab\square$$

		=== "d)"
			Apply **a)** + **c)** to $R/I \tab \square$


??? theorem "Theorem 2.8"
	$$R \text{ is Noetherian } \iff R \text{ is Noetherian and } \Spec R = \Specmax R$$

	??? proof
		=== "$\implies$"
			See [original statement](../../noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#t28).
		=== "$\impliedby$"
			<a id="t28"></a>
			By [C.3.14](#c314), we have that

			$$
			\begin{align*}
				&\nil(R) = \sqrt{\{0\}} = \bigcap_{i=1}^n m_i, & m_i \in \Specmax R \\
				&\implies I:=\prod_{i=1}^n m_i \subseteq \sqrt{\{0\}} \\
				&\implieshref{../../noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#l26}{L.2.6}
				\exists\ k : I^k \subseteq \{0\} \iff I^k \{0\} \\
				&\implies \prod_{i=1}^n m_i^k = \{0\} & \text{a product of maximal ideals} \\
				&\implieshref{../../noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#l27}{L.2.7}
				R \text{ is Artinian} && \square
			\end{align*}
			$$
			