# Open mapping theorem

??? theorem "Theorem 5.1"
    
    Let $X$ and $Y$ be banach spaces, and $T$ be a linear, continuous and bijective.
    
    $$ \implies T^{-1} \text{is continuous}$$
    
    ??? proof
        coming


??? definition "Definition: 5.1"

    ## Nowhere dense <a id="d51"></a>
    
    The set $A$ is called nowhere dense if $\overline A$ does not contain an open set.

    **Terminology:** A metric space $X$ is called

    - of first category if it is a countable union of nowhere dense sets
    - of second category otherwise.


???+ lemma "Lemma 5.1"

    ## Bair Category Theorem (BCM) <a id="bcm"></a>

    A complete metric space is of [second category](#d51).
    
    ??? proof
        
        Assume the complete metric space $X$ is of first category:

        $$ X = \bigcup_{n=1}^{\infty} A_n, \tab A_n \text{ is nowhere dense}$$
        
        The idea is to construct an element $x$ which is not in this union:

        Let $M_n:=\overline A_n$ be closed, nowhere dense. Then,
        $\begin{align*}X = \bigcup_{n=1}^{\infty} M_n\end{align*}$

        ???+ proof "Claim: $X\backslash M_1$ is open and dense"

            Assume it is not dense. Then, there exists $x \in X$ s.t.

            $$ \operatorname{dist}\big(x, X\backslash M_1\big) > 0$$

            Them, we get

            $$
            \begin{align*}
                \implies \exists\ \varepsilon > 0 : & B_\varepsilon(x) \cap X \backslash M_1 = \emptyset \\
                \implies & B_\varepsilon(x) \subseteq M_1 \contradiction
            \end{align*}
            $$

            which is a contradiction, as $M_1$ is nowhere dense.

        === "Step 1"
            Since $X\backslash M_1$ is nonempty and open, there exists a closed ball
            $S_1 \subseteq X \backslash M_1$

            $$S_1:=B_{r_1}(x_1), \tab r_1 \le \frac{1}{2}$$

        === "Step 2"
            Since $X\backslash (M_1 \cup M_2)$ is nonempty and open, there exists a closed ball
            $S_2 \subseteq X \backslash (M_1 \cup M_2)$

            $$S_1:=B_{r_2}(x_2), \tab r_2 \le \frac{1}{2^2}$$

        === "Step n"
            Since $\begin{align*}X\backslash \bigcup_{i=1}^{n} M_i \end{align*}$ is nonempty and open,
            there exists a closed ball
            $\begin{align*}S_n \subseteq X\backslash \bigcup_{i=1}^{n} M_i \end{align*}$

            $$S_n:=B_{r_n}(x_n), \tab r_n \le \frac{1}{2^n}$$

        ---

        This creates a cauchy sequence $\{x_n\}$ which must converge to an element $x \in X$.

        ??? proof "Claim: $x \in S_n \tab \forall\ n$."

            It is certainly true that

            $$x_m \in S_n \tab \forall\ m \ge n$$

            As $S_n$ is closed, it must hold for $x$ as well.

        Hence, $x \not\in M_n \tab\forall n \contradiction$  

        Thus, $X$ must be of second category.


??? theorem "Theorem 5.2"

    ## Open mapping theorem <a id="t52"></a>

    Let $T : X \to Y$ be a linear, continuous, surjective mapping between banach spaces.

    $$ \implies T \text{ is open.}$$
    
    ??? proof
        ??? proof "Claim: $\overline{T(B_\varepsilon(0))}$ contains an open subset."

        ??? proof "Claim: $\overline{T(B_\varepsilon(0))}$ contains a ball around $0$."

        ??? proof "Claim: $T(B_{2\varepsilon}(0))$ contains a ball around $0$."

        ??? proof "Claim: $T(\Omega)$ is open for all open sets $\Omega$."