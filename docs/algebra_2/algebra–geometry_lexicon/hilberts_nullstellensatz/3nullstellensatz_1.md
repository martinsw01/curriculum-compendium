# Hilbert's 1st Nullstellensatz

??? proposition "Proposition 1.2"
    ## Preimages of maximal ideals

    Let $\phi : A \to B$ be a homomorphism of $K$-algebras, 

    and $B$ be f.g. 

    $$
    \begin{align*}
    \implies & \text{For any maximal ideal } m \ideal B \\
    & \phi^{-1}(m) \ideal A \text{ is also a maximal ideal}
    \end{align*}
    $$

    ??? proof
        Let

        $$\begin{align*}
            \gamma : A & \to B/m \\
            a & \to \phi(a) + m
        \end{align*}$$
        
        be a homomorphism, and 

        $n := \Ker \gamma = \phi^{-1}(m)$ 

        be it's kernel.

        $$\begin{align*}
            \implies & A/n \cong \Im \gamma \subseteq B/m \text{, which is f.g.} \\
            \implieshref{../2lemma1.1}{L.1.1b)} & A/n \text{ is an algebraic domain} \\
            \implieshref{../2lemma1.1}{L.1.1a)} & A/n \text{ is a field} \\
            \iff & n \ideal A \text{ is a maximal ideal} & \square
        \end{align*}$$


??? example "Example 1.3"
    Let $A = K[x], B = K(x), m = \{0\} \ideal B$ a maximal ideal.

    $A \cap m = \{0\} \ideal B$ is prime, but not maximal.


??? lemma "Lemma 1.4"
    ## Lemma 1.4

    Let $p=(\xi_i)_1^n\in K^n$

    $\implies m_p = (x_1-\xi_1, ..., x_n-\xi_n) \ideal K[\underline x]$ is a maximal ideal.

    ??? proof
        Let $\phi : K[\underline x] \to K$ be the surjective vealuation homomorphism at $\xi \in K^n$. 

        $\implies \Ker \phi = m_p$ 

        $\implies K[\underline x]/m_p \cong \Im \phi = K$ is a field 

        $\iff m_p$ is a maximal ideal.


??? proposition "Proposition 1.5"
    ## Maximal ideals in a polynomial ring

    Let $K=\overline K$ be algebraically closed, 

    and $m\ideal K[\underline x]$ be a maximal ideal.

    $\implies \exists\ p=(\xi_i)_1^n \in K^n$ such that $m=m_p$.

    ??? proof
        Let $\phi : K[x_i] \to K[\underline x]$ be the identity hommomorphism. 

        $\implieshref{#preimages-of-maximal-ideals}{L.1.2} K[x_i] \cap m = \phi^{-1}(m) \ideal K[x_i]$ is maximal. 

        $K[x_i]$ is a p.i.d. 

        $\implies p_i = x_i - \xi_i$ must be a monomial 

        $\implies x_i - \xi_i \in m\ \forall\ i$ 

        $m_p = (\underline x - \underline \xi) \subseteq m (*)$ 

        $\implieshref{#lemma-14}{L.1.4} m_p \ideal K[x]$ is maximal $(**)$ 

        $\overset{(*)+(**)}{\implies} m_p = m$

??? definition "Definition 1.6"
    ## Affine variety <a id="d16"></a>
    Let $K$ be a field, and $S \subseteq K[\underline x]$ a subset.
    
    $$
         \mathcal V(S) = \mathcal V_{K^n}(S) := \{p=(\xi)_1^n\in K^n | f(p) = 0\ \forall\ f \in S\}
    $$

    is called the affine variety given by $S$.



??? theorem "Theorem 1.7"
    ## Correspondence points–maximal ideals
    Let

    - $K = \overline K$ be algebraically closed
    - $S \subseteq K[\underline x]$ be a subset
    - $\M_S := \{m \ideal K[\underline x] | m \text{ is maximal } \land S \subseteq m\}$
    be the set of maximal ideals containing S
    - $\Phi : \V(S) \to \M_S$ be the homomorphism given by $p \mapsto m_p$

    $\implies \Phi$ is a bijection.

    ??? proof
        *Surjectivity:*

        Let $m \in \M_S$

        $$\begin{align*}
            \implieshref{#maximal-ideals-in-a-polynomial-ring}{L.1.5}
            & \exists\ p \in K^n \text{ s.t.}\\ 
            & m = m_p \\
            \implies & f \in S \subseteq m_p \text{ is generated by functions with root in } p \\
            \implies & f(p) = 0 \\
            \implies & p\in \mathcal V(S) \\
            \implies & m = \Phi(p)
        \end{align*}$$

        *Injectivity:*

        Let $P, Q \in \mathcal V(S)$ s.t. $\Phi(P) = \Phi(Q)$.
        
        $$\begin{align*}
            \implies & x_i - \xi_i \in m_p = m_q \ni x_i - \eta_i \\
            \implies & (x_i - \xi_i) - (x_i - \eta_i) = \xi_i - \eta_i \in m_p \\
            \implies &\xi_i - \eta_i = 0\ \forall i & \text{as } K \cap m_p = \emptyset \\
            \implies & P = Q & & \square
        \end{align*}$$


???+ corollary "Corollary 1.8"
    ## Hilbert's Nullstellsatz

    Let $K=\overline K,\ I \properideal K[x]$
    
    $\implies \mathcal V(I) \neq \emptyset$

    ??? proof
        Let $\M:=\{J \properideal K[\underline x] | I \subseteq J\}$ be ordered by $\subseteq$ inclusion.
        and $c \subseteq \M$ be a chain.
        
        Need to find an upper bound to use Zorn's lemma (Z.L.).

        If $c = \emptyset$, then any $I \in \M$ is an upper bound. </br>
        If not, then $\overline J = \cup c \in \M$ is an upper bound.

        $$\begin{align*}
            \implieshref{https://en.wikipedia.org/wiki/Zorn%27s_lemma}{Z.L.}
            & \M \text{ has a maximal element } m \in \M \\
            \implies & m \text{ is a maximal ideal} \\
            \implieshref{#correspondence-pointsmaximal-ideals}{T.1.7}
            & \exists\ p \in \mathcal V(I) \text{ s.t. } \\ & m=m_p \\
            \implies & \mathcal V(I) \neq \emptyset & \square
        \end{align*}$$