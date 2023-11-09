# Noetherian Rings and Modules

???+ theorem "Theorem 2.9"
    ## Alternate definition of Noetherian Modules <a id="t29"></a>

    === "Theorem"
        Let $M$ be an $R$-module

        The following are equivalent:
        === "a)"
            $$M \text{ is Noetherian}$$
        === "b)"
            Let $S \subset M$ be any subset.

            $$
            \begin{align*}
            \exists\ m_1, ..., m_n \in S \text{ s.t.} \\
            (S)_R = (m_1, ..., m_n)
            \end{align*}
            $$
        === "c)"
            $$\text{Every submodule of } M \text{ is f.g.}$$

    === "Proof"
        === "$(a) \implies (b)$"
            Assume $\exists\ S\subseteq M$ not satisfying $b)$.
            
            Recursively define (S_i) of finite subsets $S_i \subset S$ as follows:
            
            - Set $S_i = \emptyset$
            - Choose an element $m_{i+1}\in S\backslash(S_i)$
            - Let $S_{i+1} = S_i \cup \{m_{i+1}\}$
            
            $$
            \begin{align*}
                & \implies (S_i) \subsetneq (S_{i+1}) \\
                & \implies M \text{ is not Noetherian } \contradiction \\
                & \implies S \text{ must satisfy } b) & \square
            \end{align*}
            $$
        
        === "$b) \implies c)$"
            Let $S=M$ be any submodule.
        
        === "$c) \implies a)$"
            $\begin{align*}
                \text{Let } & M_1 \subseteq M_2 \subseteq ... \subseteq M \text{ be an ascending chain} \\
                & N:=\bigcup_{i\in\N} M_i \tab\text{is a submodule (verify this!)} \\
                \implies & N = (m_1, ..., m_n)
            \end{align*}$
            
            For each $j$, we have that $m_j \in M_j$. </br>

            $\begin{align*}
                \text{Let } &k:= \max\left\{i_j\right\}_{j=1}^n \\
                \implies & m_k \in M_k \\
                \text{Let } &i \ge k \\
                \implies & M_i \subseteq N = (m_1, ..., m_n) \subseteq M_k \subseteq M_i \\
                \implies &M_i = M_k & \square
            \end{align*}$


??? remark "Remark: Theorem 2.9 for rings"
    === "a)"
        $$R \text{ is Noetherian } \iff \text{ all ideals } I \ideal R \text{ is finitely generated}$$
    === "b)"
        $$\text{Every generating set contains a finite generating set}$$


???+ theorem "Theorem 2.10"
    ## Noetherian modules and finite generation <a id="t210"></a>
    
    $\begin{align*}
        \text{Let } & R \text{ be Noetherian} \\
        & M \text{ be an } R\text{-module}
    \end{align*}$

    === "Theorem"
        $$M \text{ is Noetherian} \iff m \text{ is finitely generated}$$

    === "Proof"
        === "$\implies$"
            Follows from [T.2.9](#t29).
        === "$\impliedby$"
            Let $M=(m_1, ..., m_n)$

            Induction on $n$:
            
            $n=0:\tab M=\{0\}$

            $n>0:$
            
            $\begin{align*}
                \text{Let } & N:=(m_1, ..., m_{n-1}) \subseteq M \text{ be a submodule.
                Its is Noetherian by the induction hypothesis} \\
                & \begin{rcases}
                    \phi: R &\to M/N \\
                    a &\mapsto a\ m_n + N
                \end{rcases} \text{ be a surjective } R \text{-linear homomorphism} \\
                \implieshref{../6noetherian_and_artinian_properties#p24}{P.2.4}
                & R/\Ker \phi \text{ is Noetherian} \\
                \implies & M/N \cong R/\Ker \phi \\
                \implieshref{../6noetherian_and_artinian_properties#p24}{P.2.4}
                & M \text{ is Noetherian} & \square
            \end{align*}$


???+ theorem "Theorem 2.11"
    ## Polynomial rings over Noetherian rings
    Let $R$ be a Noetherian ring.

    === "Theorem"
        $$\implies R[x] \text{ is Noetherian}$$

    === "Proof"
        We want to show that all ideals $I\ideal R[x]$ are f.g. as modules, and use [T2.10](t210) to show
        that $R[x]$ is Noetherian.

        For $i \in \N_0$, set

        $$J_i:=\{a_i \in R | \ \exists\ a_0, ..., a_{i-1} \in R : \sum_{j=0}^i a_j x^j \in I\} \ideal R$$

        Let $a_i \in J_i$

        $$
        \begin{align*}
            \implies & \exists\ f = \sum_{j=0}^i a_j x^j \in I \\
            \implies & x f \in I \\
            \implies &a_i \in J_{i+1} \\
            \implies &J_i \in J_{i+1} \\
            \implies &
            \begin{cases}
                \exists\ n\in\N \text{ s.t.} \\
                J_i = J_n \tab \forall\ i \ge n \\
            \end{cases}\tab\text{as R is Noetherian} \\
            \implies & J_i = (a_{i,1}, ..., a_{i,m_i})_R \tab a_{i,j}\in J_i\tab\text{is finitely generated } (*)
        \end{align*}
        $$

        Let $a_i \in J_i$ </br>
        For $i \ge n$:
        
        $$\implies J_i = (a_{n,1}, ..., a_{n,m_n}) \tab(**)$$

        $\begin{align*}
            \text{For } & 0 \le i \le n \\
            & 1 \le j \le m_j \\
            \text{Let } & f_{i,j} \in I \text{ be a function of degree } \deg f_{i,j} \le i \\
            \text{and } & a_{i,j} \in J_i \text{ be the } i\text{th coefficient of } f_{i,j}
        \end{align*}$

        We want to prove that $\left\{f_{i,j}\right\}_{i=0,j=1}^{n,m_i}$ generate I:
        
        Let

        $$I':= (f_{i,j} | 0 \le i \le n , 1 \le j \le m_i)_{R[x]} \subseteq I$$

        and take any $f \in I$. We claim that $f\in I'$. Using induction on $d:=\deg f$:

        === "$d\le n$"
            Let $b_d$ be the coefficient of $x^d$ in $f$.

            $$
            \begin{align*}
                \implies & b_d \in J_d \\
                \overset{(*)}{\implies} &
                \begin{cases}
                    b_d & \in (a_{d, 1}, ..., a_{d_{m_d}}) \\
                    b_d & = \sum_{j=1}^{m_d} r_j a_{d,j}
                \end{cases}
            \end{align*}
            $$

            Let $\begin{align*}\tilde f:=f - \sum_{j=1}^{m_d} r_j f_{d,j} \in I\end{align*}$

            $$
            \begin{align*}
                \implies & \deg \tilde f < d \\
                \implies & \tilde f \in I' \\
                \implies & f = \tilde f + \sum_{j=1}^{m_d} f_{d,j} \in I'
            \end{align*}
            $$

        === "$d>n$"
            Let $b_d$ be the coefficient of $x^d$ in $f$.

            $$
            \begin{align*}
                \implies & b_d \in J_d \\
                \overset{(*)+(**)}{\implies} &
                \begin{cases}
                    b_d & \in (a_{d, 1}, ..., a_{d_{m_d}}) = (a_{n, 1}, ..., a_{n_{m_n}}) \\
                    b_d & = \sum_{j=1}^{m_d} r_j a_{d,j} = \sum_{j=1}^{m_n} r_j a_{n,j}
                \end{cases}
            \end{align*}
            $$

            Let $\begin{align*}\tilde f:=f - \sum_{j=1}^{m_n} r_j f_{n,j} \in I\end{align*} \in I$.

            Then $\deg \tilde f < d$, which by the induction hypothesis implies that it lies in $I'$

        $$\begin{align*}\implies f \in I' && \square\end{align*}$$


??? corollary "Corollary 2.12"
    ## Finitely generated algebras

    Every f.g. algebra over a Noetherian ring is Noetherian


??? theorem "Theorem 2.13"
    ## Hilbert's basis theorem <a id="t213"></a>

    Every ideal in $K[\underline x]$ is f.g.