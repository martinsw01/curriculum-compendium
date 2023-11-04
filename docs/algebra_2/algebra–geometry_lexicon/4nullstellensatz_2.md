# Hilbert's 2nd Nullstellensatz

??? definition "Definition 1.9"
    ## Spectra
    Let $R$ be a ring.
    === "Spectrum of $R$"
        $\Spec R := \{P \ideal R | P \text{ is a prime ideal}\}$

    === "Maximal spectrum of $R$"
        $\Specmax R := \{P \ideal R | P \text{ is a maximal ideal}\}$

    === "Rabinowitsch spectrum of $R$"
        $\Specrab R := \{m \cap R | m \in \Specmax{R[x]}\}$

??? definition "Definition: Radical"
    ## Radical
    Let $I \ideal R$
    
    $\sqrt I := \{a \in R | \ \exists\ k \in \N : a^k \in I\}$

    is called the radical ideal


??? lemma "Lemma 1.10"
    ## Lemma 1.10
    === "Lemma"
        Let $\mathcal M \subseteq \Spec R$ be a set of prime ideals</br>
        and $I \ideal R$ be an ideal.

        $$
            \implies \sqrt I \subseteq \bigcap_{I \subseteq P \in \mathcal M} P
        $$

    === "Proof"
        Let $a \in \sqrt I, I\subseteq P\in \mathcal M$

        $$\begin{align*}
            \implies & \exists\ k : a^k \in I \subseteq P = \sqrt P \\
            \implies & a \in P & \square
        \end{align*}$$


??? proposition "Proposition 1.11"
    ## The raison d’être of the Rabinowitsch spectrum
    === "Proposition"
        Let $I \ideal R$

        $$\implies \sqrt I = \bigcap_{\substack{P \in \Specrab R \\ I \subseteq P}} P$$

    === "Proof"
        $\subseteq:$ follows from [L.1.10](#lemma-110)

        $\supseteq:$ Let $a \in \cap P$ and 

        $$
            J := \left(I \cup \{ax-1\}\right)_{R[x]} \ideal R[x]
        $$

        We want to show that $J = R[x]$. Now, assume it is not.
        
        $$\begin{align*}
            \implieshref{https://en.wikipedia.org/wiki/Zorn%27s_lemma}{Z.L.}
            & \ \exists\ m \in \Specmax{R[x]} \text{s.t.} \\
            & J \subseteq m \\
            \implies & I \subseteq R \cap J \subseteq R \cap m \in Specrab R \\
            \implies & a \in R \cap m \land ax - 1 \in m\\
            \implies & (ax) - (ax - 1) = 1 \in m \contradiction
        \end{align*}$$
        
        We thus get that $J = R[x]$. The next steps are similar to the solving real problems by moving into the´
        complex domain.

        There exists $g_j, g \in R[x]$ and $b_j \in I$ such that

        $$1 = \sum_{j=1}^n g_j b_j + g(ax-1) \ (*)$$

        Apply the homomorphism
        
        $$\begin{align*}
            \phi : R[x] & \to R[x, x^{-1}] \\
            f(x) & \mapsto f(x^{-1})
        \end{align*}$$

        to $(*)$, and multiply by $x^k$:

        $$\implies x^k = \sum_{j=1}^n x^k \phi(g_j) b_j + x^{k-1} \phi(g) (a-x) \ (**)$$
        
        Choose $k \le \max \{\deg g_j\}_{j=1}^n \cup \{1+\deg g\}$ and </br>
        let $h(x):=x^k \phi(g)$ and $h_j(x) := x^{k-1} \phi(g)$.

        $\implies h, h_j \in R[x]$

        Now, evaluate $(**)$ at $x=a$:
    
        $$\begin{align*}
            a^k &= \sum_{j=1}^n h_j(a) b_j + 0 \in I \\
            \implies a & \in \sqrt I & \square\\
        \end{align*}$$


??? corollary "Corollary 1.12"
    ## Intersecting prime ideals
    === "Corollary"
        Let $I \ideal R, \mathcal M=\Spec R$

        $$\implies \sqrt I = \bigcap_{\substack{P \in \mathcal M \\ I \subseteq P}} P$$

    === "Proof"
        $\subseteq:$ follows from [L.1.10](#lemma-110)
        
        $\supseteq:$

        $$\begin{align*}
            \Specrab R & \subseteq \Spec R \\
            \implies \bigcap_{\substack{P \in \Spec R \\ I \subseteq P}} P
            & \subseteq \bigcap_{\substack{P \in \Specrab R \\ I \subseteq P}} P
            = \sqrt I & \square
        \end{align*}$$


??? theorem "Theorem 1.13"
    ## Intersecting maximal ideals
    === "Theorem"
        Let $I \ideal A$ be an ideal in an affine algebra

        $$\implies \sqrt I = \bigcap_{\substack{m \in \Specmax A \\ I \subseteq m}} m$$
    
    === "Proof"
        $\subseteq:$ follows from [L.1.10](#lemma-110)
        
        $\supseteq:$ Let $P \in \Specrab A$

        $$\begin{align*}
            \implieshref{../4nullstellensatz_2/#preimages-of-maximal-ideals}{L.1.2}
            & P \in \Specmax A \\
            \implies & \Specrab A \subseteq \Specmax A \\
            \implies & \bigcap_{\substack{m \in \Specmax A \\ I \subseteq m}} m
            \subseteq \bigcap_{\substack{P \in \Specrab A \\ I \subseteq P}} P
            \overset{\href{#the-raison-detre-of-the-rabinowitsch-spectrum}{P.1.11}}{=} \sqrt I & \square 
        \end{align*}$$

??? definition "Definition 1.14"
    ## Jacobson ring
    A ring $R$ is called a Jacobson ring if $\forall\ I\ideal R:$

    $$\sqrt I = \bigcap_{\substack{m \in \Specmax R \\ I \subseteq m}} m$$


??? definition "Definition 1.15"
    ## Vanishing ideal
    Let $X \subseteq K^n$ be any subset.
    
    $$\I(X) := \{f \in K[\underline x] : f|_X = 0\}$$

    is called the vanishing ideal of $X$.


??? remark "Remark 1.16"
    $\I(X) \ideal K[\underline x]$ is radical


???+ theorem "Theorem 1.17"
    ## Hilbert's Nullstellensatz

    === "Theorem"
        Let $K = \overline K, I \ideal K[\underline x]$

        $$\implies \I(\V(I) = \sqrt I$$

    === "Proof"
        $$\begin{align*}
            \I(\V(I)) &= \bigcap_{p \in \V(I)} m_p
            \overset{\href{../3nullstellensatz_1/#correspondence-pointsmaximal-ideals}{T.1.7}}{=}
            \bigcap_{\substack{m \in \Specmax{K[\underline x]} \\ I \subseteq m}} m
            \overset{\href{#intersecting-maximal-ideals}{T.1.13}}{=} \sqrt I & \square
        \end{align*}$$


??? lemma "Lemma 1.18"
    ## Lemma 1.18

    === "Lemme"
        Let $X \subseteq K^n$ be an affine variery.

        $$\implies \V(\I(X)) = X$$

    === "Proof"
        Let $S \subseteq K[\underline x]$ be a subset s.t. $X = \V(S)$.

        $$\begin{align*}
            \implies & S \subseteq \I(X) \\
            \implies & \V(\I(X)) \subseteq \V(S) = X \subseteq \V(\I(X)) & \square
        \end{align*}$$


??? corollary "Corollary 1.19"
    ## Ideal–variety correspondence
    
    === "Corollary"
        Let $K = \overline K, n \in \N_+$
    
        $$\begin{align*}
            \implies & \text{There is an inclusion-reversing bijection between} \\
            & A:= \{I \ideal K[\underline x] | I \text{ is a radical ideal}\} \\
            & G:= \{X \subseteq K^n | X \text{ is an affine variety}\} \\
            & A \to G \text{ given by } I \mapsto \V(I) \\
            & G \to A \text{ given by } X \mapsto \I(X)
        \end{align*}$$

    === "Proof"
        $$
            \I(\V(I))
            \overset{\href{#hilberts-nullstellensatz}{L.1.17}}{=} \sqrt I = I \tab \square
        $$
