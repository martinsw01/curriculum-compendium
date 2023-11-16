#Spectra

??? definition "Definition 3.5"

	Let $S \subseteq R$ be a subset
	
	$$\V_{\Spec R}(S) = \V(S):=\{P \in \Spec R | S \subseteq P\}$$
	
	For $X \subseteq \Spec R$:
	
	$$
	\begin{align*}
		\I_R(X) &= \I(X):= \cap X \ideal R \\
		\I_R(\emptyset)&:=R
	\end{align*}
	$$
	
	## Zariski-topology on $\Spec R$
	
	A subset $X \subseteq \Spec R$ is called closed if $X = \V(S)$ for some $S\subseteq R$.
	

??? proposition "Proposition 3.6"
	## Properties of $\V_{\Spec R}$ and $\I_R$ <a id="p36"></a>

	=== "a)"
		### Finite union of closed subsets
		
		Let $S, T \subseteq R$ be subsets.
		
		$$\V(S) \cup \V(T) = \V\Big((S)_R \cap (T)_R\Big)$$
		
	=== "b)"
		### Arbitrary intersection of closed subsets
		
		For $\emptyset \ne \M \subseteq P(R)$, a nonempty subset of the powerset:
		
		$$\bigcap_{S\in\M} \V(S) = \V(\cup \M)$$
		
	=== "c)"
		### Radical ideal
	
		$$\I(X) \ideal R \text{ is a radiacal ideal}$$

	=== "d)"
		### Nullstellensatz
		
		For $I \ideal R$:
		
		$$\I(\V(I)) = \sqrt I$$
		
	=== "e)"
		### Bijection between radicals and closed subsets
		
		There exists a unique bijection between
		
		- radical ideals in $R$
		- closed subsets of $\Spec R$

		given by
		
		$$
		\begin{align*}
			I & \mapsto \V(I) \\
			X &\mapsto \I(X)
		\end{align*}
		$$
			
	??? proof
		=== "a)"
			=== "$\subseteq$"
				Let $P \in \V(S)$
				
				$$
				\begin{align*}
					&\implies S \subseteq P \\
					&\implies (S)_R \subseteq P\\
					&\implies (S)_R \cap (T)_R \subseteq P\\
					&\implies P \in P((S)_R \cap (T)_R)\\
				\end{align*}
				$$
			
			=== "$\supseteq$"
				Let $P \in P((S)_R \cap (T)_R)$
				
				Assume $P \not\in \V(S)$. $\implies \exists\ a\in S\backslash P$.
				
				Let $b \in T$
				
				$$
				\begin{align*}
					&\implies ab \in (S)_R \cap (T)_R) \\
					&\implies ab \in P \\
					&\implies a \in P \lor b \in P\\
					&\implies b \in P \\
					&\implies T \subseteq P \\
					&\implies P \in \V(T) && \square
				\end{align*}
				$$
		
		=== "b)"
			"Trivial" tautology, by pure logic:
			
			Let $P \in \Spec R$
			
			$$
			\begin{align*}
				P \in \bigcup_{S\in\M} \V(S)
				&\iff S \subseteq P & \forall S \in\M \\
				&\iff \cup \M \subseteq P \\
				&\iff P \in \V(\cup \M) && \square
			\end{align*}
			$$
			
		=== "c)"
			- Prime ideals are radical ideals.
			- Intersections of countable radicals stays radical. $\tab\square$
		
		=== "d)"
			See [C.1.12](../../hilberts_nullstellensatz/4nullstellensatz_2/#c112)
			
		=== "e)"
			Let $X \subseteq \Spec R$ be a closed subset.
			
			We need to show that $\V(\I(X)) = X$.
			
			As $X$ is closed, we have $X=\V(S)$ for some $S\subseteq R$.
			
			$$
			\begin{align*}
				&\implies S \in P & \forall\ P \in X \\
				&\implies S \subseteq \cap X = \I(X) \\
				&\implies \V(\I(X)) \subseteq \V(S) = X \subseteq \V(\cap X) = \V(\I(X)) & \square
			\end{align*}
			$$

		
???	remark "Remark: Closure"
	## Closure
	
	Let $X \subseteq \Spec R$.
	
	The closure $\overline X$ is given by
	
	$$\overline X := \V(\I(X))$$
	
	
???	remark "Remark: Point sets may not be closed"
	A point $P\in\Spec R$ is a prime ideal.
	
	It's closure is given by
	
	$$
	\begin{align*}
		\overline{\{P\}}
		& =\V(\I\{P\}) \\
		&= \V(P) \\
		&= \{Q \in \Spec R | P \subseteq Q\}
	\end{align*}
	$$
	
	Thus, we have that
	
	$$\{P\} \text{ is closed } \iff P \text{ is maximal}$$