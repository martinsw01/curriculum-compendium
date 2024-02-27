# 7 The Principal Ideal Theorem

??? lemma "Lemma 7.1"
    ## Adjugate matrix over rings <a id="l71"></a>

    $\begin{align*}
        \text{Let } & A = (a_{ij}) \in \R^{n\times m} \\
        & c_{ik} \in R \text{ be the determinant obtained from } A
        \text{ by removing the } i\text{-th row and } k\text{-th column}
    \end{align*}$

    $$\implies \sum_{i=1}^{n} (-1)^{i+k} c_{ik} a_{ij} = \det(A) \delta_{jk}$$


??? lemma "Lemma 7.2"
    <a id="l72"></a>

    $\begin{align*}
        \text{Let } & M=(m_1, \dots, m_n) \text{ be a f.g. } R\text{-module} \\
        & A=(a_{ij}) \in \R^{n\times m} \text{ be a matrix s.t.}
    \end{align*}$

    $$ \sum_{j=1}^{n} a_{ij} m_j = 0 \tab \forall\ i\in\{1, \dots, n\}$$

    $$\implies \det(A) \in \Ann(M)$$

    ??? proof
        For $k=1, \dots, n$:

        $$
        \begin{align*}
            \det(A) m_k &= \sum_{j=1}^{n} \det(A) \delta_{jk} m_j \\
            &\eqhref{#l71}{L.7.1} \sum_{i=1}^{n} \sum_{j=1}^{n} (-1)^{i+k} c_{ik} a_{ij} m_j \\
            &= \sum_{i=1}^{n} c_{ik} (-1)^{i+k} \sum_{j=1}^{n} a_{ij} m_j \\
            &= 0
        \end{align*}
        $$


??? definition "Definition: Jacobson radical"
    $$J = \bigcap_{\m\in\Specmax R} \m$$


??? theorem "Theorem 7.3"
    ## Nakajama Lemma <a id="t73"></a>

    $\begin{align*}
        \text{Let } & M \text{ be a f.g. } R\text{-module} \\
        & J \text{ be the Jacobson radical of } R
    \end{align*}$

    such that $JM = M$.

    $$\implies M = \{0\}$$

    ??? proof
        Let $m_1, \dots, m_n$ be a generating set of $M$.

        We have that $J M = M$.

        $$\implies m_i = \sum_{j=1}^{n} a_{ij} m_j, \tab \forall\ i\in\{1, \dots, n\}$$

        This can be rewritten as the matrix equation

        $$(\I-A) m = 0$$

        where $m=(m_1, \dots, m_n)^T$.

        $$
        \begin{align*}
            &\implieshref{#l72}{L.7.2}\ d:=\det(\I-A) \in \Ann(M) \\
            &\implies d \equiv 1 \mod J \\
            &\implies d \equiv 1 \mod \m \tab \forall\ \m\in\Specmax R \\
            &\implies d \notin \m \\
            &\implies d \in R^\times \\
            &\implies M = 1 \cdot M = d^{-1} d M = d^{-1} \{0\} = \{0\}
        \end{align*}
        $$


??? theorem "Theorem 7.4"
    ## Principal Ideal Theorem
    
    $\begin{align*}
        \text{Let } & R \text{ be a Noetherian ring} \\
        & a \in R \\
        & P \in \Spec R \text{ be a minimal over } (a)
    \end{align*}$

    $$
    \begin{align*}
        &\implies \ht(P) \le 1 \\
        &\implies \ht(a) \le 1 \tab &\text{ if } a \notin R^\times
    \end{align*}
    $$

    ??? proof
        ??? proof "Claim: We can assume $(R, P)$ is a local ring"
            
            $\begin{align*}
                &\implieshref{../localization/#t55}{T.5.5}
                P_P \text{ is minimal over } \left(\frac{a}{1}\right) \ideal R_P \\
                &\implies \ht(P_P) = \ht(P) \\  
                &\implies \text{We can replace } R \text{ by } R_P \text{ and } P \text{ by } P_P \\
                &\implies (R, P) \text{ is local, with } P \text{ being the maximal ideal}
            \end{align*}$

        $\begin{align*}
            &\implies P \text{ is the only prime ideal over } (a) \\
            &\implies P/(a) \ideal R/(a) \text{ is the only ideal of } R/(a) \\
            &\implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#t28}{T.2.8}
            R/(a) \text{ is Artinian} \\
        \end{align*}$

        ??? proof "Claim: $R_a$ is also Artinian"

            Let $I, J \ideal R_a$ be ideals s.t. $J \subseteq I$.

            Using the homomorphisms $\varepsilon$ and

            $$
            \begin{align*}
                \phi: R &\to R/(a) \\
                r &\mapsto r + (a)
            \end{align*}
            $$

            together with the fact that $R/(a)$ is Artinian, we would eventually get that

            $$\phi(\varepsilon^{-1}(I)) = \phi(\varepsilon^{-1}(J)) \tab\tab (*)$$

            Let $x \in \varepsilon^{-1}(I)$.

            $$
            \begin{align*}
                \overset{(*)}{\implies}& \phi(x) = \phi(y) \tab \text{ for some } y \in \varepsilon^{-1}(J) \\
                \implies& x = y + a z \tab \text{ for some } z \in R \\
                \implies& \varepsilon(a) \varepsilon(z) = \varepsilon(x) - (y) \in I \\
            \end{align*}
            $$

            We trivially have that $\varepsilon(a) = \frac{a}{1} \in R_a^\times$.

            $$
            \begin{align*}
                \implies& \varepsilon(z) = \varepsilon(a)^{-1} \big(\varepsilon(x) - \varepsilon(y)\big) \in I \\
                \implies& x \in \varepsilon^{-1}(J) + a \varepsilon^{-1}(I)
            \end{align*}
            $$

            So we have that $\varepsilon^{-1}(I) \subseteq \varepsilon^{-1}(J) + a \varepsilon^{-1}(I) \tab\tab (**)$.

            Let $M:=\varepsilon^{-1}(I)/\varepsilon^{-1}(J)$. We have that

            $$M \overset{(**)}{\subseteq} a M \subseteq PM \subseteq M$$

            $$
            \begin{align*}
                \implies & M = PM \\
                \implieshref{#t73}{T.7.3} & M = \{0\} \\
                \implies& \varepsilon^{-1}(I) = \varepsilon^{-1}(J) \\
                \implieshref{../localization/#p53}{P.5.3i} & I = J
            \end{align*}
            $$

            Thus, any chain of ideals in $R_a$ will stop as soon as or sonner than the corresponding chain in $R/(a)$.
            Hence, $R_a$ is Artinian.

        Let $P \supsetneq Q \in \Spec R$. By minimality of $P$ over $(a)$, we have

        $$
        \begin{align*}
            \implies& a \notin Q \\
            \implieshref{../localization/#p53}{P.5.3g}& R_Q \text{ is a localisation of } R_a \\
            \implies& R_a \neq \{0\} \\
            \implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#t28}{T.2.8}&
            \dim(R_a) = 0 \\
            \implieshref{../localization/#c56}{C.5.6}
            &\dim(R_Q) \le \dim(R_a) = 0 \\
            \implies& \ht(Q) \le 0 \\
            \implies& Q \text{ is a minimal prime} \\
            \implies& \ht(P) \le 1            
        \end{align*}
        $$

??? theorem "Theorem 7.5"
    ## PIT generalized <a id="t75"></a>

    $\begin{align*}
        \text{Let } & R \text{ be a Noetherian ring} \\
        & P \in \Spec R \text{ be minimal over } (a_1, \dots, a_n)
    \end{align*}$

    $$\implies \ht(P) \le n$$

    ??? proof
        As in [T.7.4](#t74), we can assume $(R, P)$ is a local ring.

        **Induction on $n$**

        $n=0 \overset{\text{def}}{\implies} \ht(P) = 0$

        Now, let $n>0$.

        Let $P \supsetneq Q \in \Spec R$ with no prime ideal between them.

        $$
        \begin{align*}
            \implies& a_1 \notin Q \tab\text{ by relabelling} \\
            \implies& P \text{ is minimal over } Q + (a_1) \\
            \overset{P \text{ max}}{\implies}& P \text{ only prime over } Q + (a_1) \\
            \implieshref{../../algebra–geometry_lexicon/hilberts_nullstellensatz/4nullstellensatz_2/#c112}{C.1.12}&
            \sqrt{Q + (a_1)} = P \\
            \implies& a_i^{k_i} = b_i + x_i a_1 \tab \text{ for some } b_i \in Q, x_i \in R \\
            \implies& (a_1, a_2^{k_2}, \dots, a_n^{k_n}) = (a_1, b_2, \dots, b_n) \\
            \implies& P \text{ is minimal over } (a_1, b_2, \dots, b_n) \\
            \implies& \overline{P}:=P/(b_2, \dots, b_n) \in \Spec{R/(b_2, \dots, b_n)}
            \text{ is minimal over } (\overline{a_1}) \\
            \implieshref{#t74}{T.7.4}& \ht(\overline{P}) \le 1 \\
            \overset{\overline Q \subsetneq \overline P}{\implies}& \ht(\overline Q) = 0 \\
            \implies& Q \text{ is minimal over } (b_2, \dots, b_n) \\
            \overset{\text{ind}}{\implies}& \ht(Q) \le n-1 \\
            \implies& \ht(P) \le n
        \end{align*}
        $$


??? corollary "Corollary 7.6"
    ## Finiteness of height <a id="c76"></a>

    $\begin{align*}
        \text{Let } & R \text{ be a Noetherian ring} \\
        & P \in \Spec R
    \end{align*}$

    $$\implies \ht(P) < \infty$$

    The height is bounded abouve by the number of generators of $P$.

    This implies that for a local Noetherian ring $R$, we have $\dim(R) < \infty$.


??? lemma "Lemma 7.7"
    ## Prime avoidance <a id="l77"></a>
    
    Let $I, P_1, \dots, P_n \ideal R$ be ideals with $P_i \in \Spec R \forall\ i\ge 3$.

    $$I \subseteq \bigcup_{i=1}^{n} P_i \implies \exists\ i : I \subseteq P_i$$

    ??? proof
        **Induction on $n$**

        $n=1 \implies I \subseteq P_1$

        Now, let $n>1$.

        Assume the converse of the hypothesis:

        $$
        \begin{align*}
            &\forall\ i\ \exists\ x_i \in I \setminus \bigcup_{j\neq i} P_j \\
            \implies& x_i \in P_i \\
            \implies& x_1 + x_2 \in I \setminus \left(P_1 \cup P_2\right) \\
            \implies& n \ge 3 \\
        \end{align*}
        $$

        Moreover,

        $$x_n + \prod_{i=1}^{n-1} x_i \in I \setminus \bigcup_{i=1}^{n} P_i \tab\tab \contradiction$$

    ???+ remark "Remark: Usage"
        If the hypothesis does not hold, then there exists an $x \in I$ that avoids all the primes $P_i$:

        $$\forall\ i : I \not\subseteq P_i \implies \exists\ x\in I\ \forall\ i : x \notin P_i$$


??? theorem "Theorem 7.8"
    ## Converse of PIT <a id="t78"></a>

    $\begin{align*}
        \text{Let } & R \text{ be a Noetherian ring} \\
        & P \in \Spec R \\
        & \ht(P) \le n
    \end{align*}$

    $$\implies \exists\ a_1, \dots, a_n \in P \text{ s.t. } P \text{ is minimal over } (a_1, \dots, a_n)$$

    ??? proof
        Without loss of generality, we can assume $\ht(P) = n$.

        **Induction on $n$**

        $n=0$ is trivial.

        Now, let $n>0$.

        Then, we have a chain of prime ideals

        $$P_0 \subsetneq P_1 \subsetneq \dots \subsetneq P_n = P$$

        Let $Q_1, \dots, Q_r$ be the minimal primes in $R$.

        $$
        \begin{align*}
            \implies& P_1 \subsetneq Q_i & \forall\ i \\
            \implies& \exists\ a_1 \in P_1 \setminus Q_i & \forall\ i \\
        \end{align*}
        $$

        Let $\overline R = R/(a_1)$. Then, we get the chain 

        $$\overline P_1 \subsetneq \overline P_2 \subsetneq \dots \subsetneq \overline P_n = \overline P$$

        implying that $\ht(\overline P) \le n-1$.

        However, none of the $Q_i$ yields primes in $\overline R$.

        $$
        \begin{align*}
            \implies& \ht(\overline P) = n-1 \\
            \overset{\text{ind}}{\implies}& \exists\ a_2, \dots, a_n : \overline P
            \text{ is minimal over } (\overline a_2, \dots, \overline a_n) \\
            \implies& P \text{ is minimal over } (a_1, \dots, a_n)
        \end{align*}
        $$


??? corollary "Corollary 7.9"
    ## Systems of parameters <a id="c79"></a>

    Let $(R, \m)$ be a local Noetherian ring.

    $$\implies \dim(R) = \min\left\{n\ \left|\ \exists\ a_1, \dots, a_n : m = \sqrt{(a_1, \dots, a_n)}\right\}\right.$$

    $a_1, \dots, a_n$ are called a **system of parameters** of $R$.

    ??? proof
        $$
        \begin{align*}
            \exists\ a_1, \dots, a_n : \m = \sqrt{(a_1, \dots, a_n)}
            \iff& \exists\ a_1, \dots, a_n : \m \text{ is minimal over } (a_1, \dots, a_n) \\
            \overset{\href{#t75}{\text{T.7.5}}+\href{#t78}{\text{T.7.8}}}{\iff}&
            \dim(R) = \ht(\m) \le n
        \end{align*}
        $$


??? lemma "Lemma 7.10"
    ## Fiber dimension, lower bound, local case <a id="l710"></a>

    $\begin{align*}
        \text{Let } & (R, \m) \text{ and } (S, \n) \text{ be local Noetherian rings} \\
        & \phi : R \to S \text{ be a local homomorphism s.t. } \phi(\m) \subseteq \n\\
        &I = (\phi(m))_S
    \end{align*}$

    $$\implies \dim(S/I) \ge \dim(S) - \dim(R)$$

    ??? proof
        Let $a_1, \dots, a_m \in \m$ be a system of parameters.

        $$
        \begin{align*}
            \implieshref{#c79}{C.7.9}& m = \dim(R) \\
            \implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#l26}{L.2.6}&
            \exists\ k : \m^k \subseteq (a_1, \dots, a_m)_R \\
        \end{align*}
        $$

        ??? proof "Claim: $I^k \subseteq (\phi(a_1), \dots, \phi(a_m))_S \tab (*)$"

        Then, by
        [L.1.22](../../algebra–geometry_lexicon/hilberts_nullstellensatz/5coordinate_rings/#l122) +
        [P.2.4](../../algebra–geometry_lexicon/noetherian_and_artinian_rings/6noetherian_and_artinian_properties/#p24)
        we get that $S/I$ is a local Noetherian ring. Then, by [C.7.9](#c79)

        $$\exists\ b_1 + I, \dots, b_n + I \in \n/I \tab (**)$$

        a system of parameters with $n = \dim(S/I)$.

        ??? proof "Claim: $\n= \sqrt{\big(\phi(a_1), \dots, \phi(a_m), b_1, \dots, b_n\big)_S}$"
            Let $x \in \n$.

            $$
            \begin{align*}
                \overset{(**)}{\implies}& \exists\ l : (x+I)^l \in (b_1 + I, \dots, b_n + I)_{S/I} \\
                \implies& x^l \in (b_1, \dots, b_n)_S + I \\
                \overset{(*)}{\implies}& x^{kl} \in (b_1, \dots, b_n)_S + I^k
                \subseteq \big(\phi(a_1), \dots, \phi(a_m), b_1, \dots, b_n\big)_S
            \end{align*}
            $$

        Then, by [C.7.9](#c79) we get that

        $$ \dim(S) \le m + n = \dim(R) + \dim(S/I)$$


??? corollary "Corollary 7.11"
    ## Dimension of polynomial rings <a id="c711"></a>    

    Let $R$ be a nonempty Noetherian ring.

    $$\implies \dim(R[x]) = \dim(R) + 1$$

    ??? proof
        === "$\ge$"
            Let $I \ideal R$

            $$ \implies
            \begin{cases}
                R[x]/(I)_{R[x]} \cong (R/I)[x] \\
                R \cap (I)_{R[x]} = I
            \end{cases} \tab (*)
            $$

            Let

            $$P_0 \subsetneq P_1 \subsetneq \dots \subsetneq P_n$$

            be a sequence of primes in $R$. Then, $Q_i:=(P_i)_{R[x]}$ yields a strictly ascending chain of primes in $R[x]$.

            $$
            \begin{align*}
                \overset{(*)}{\implies}& R[x]/Q_n \cong (R/P_n)[x] \text{ is not a field} \\
                \implies& Q_n \text{ is not maximal} \\
                \implies & \dim(R[x]) \ge n+1
            \end{align*}
            $$

        === "$\le$"
            $\begin{align*}
                \text{Let } & Q \in \Spec{R[x]} \\
                & P:= Q \cap R \in \Spec R
            \end{align*}$

            ??? proof "Claim: $\ht(Q) \le \ht(P) + 1$"
                $\begin{align*}
                    \text{Let } & S:= R[x]_Q \\
                    & \phi: R_P \to S \text{ be an inclusion homomorphism} \\
                    & I:= (\phi(P_P))_S
                \end{align*}$

                $$\implieshref{#l710}{L.7.10} \dim(S/I) \ge \dim(S) - \dim(R_P) = \ht(Q) - \ht(P)$$

                Then, it remains to show that $\dim(S/I) \le 1$.

                By [L.1.22](../../algebra–geometry_lexicon/hilberts_nullstellensatz/5coordinate_rings/#l122) +
                [T.5.5](../localization/#t55) there exists an inclusion preserving bijection between

                $$\Spec{S/I} \leftrightarrow \left\{L \in \Spec{R[x]}\ \Big |\ (P)_{R[x]} \subseteq L \overset{(**)}{\subseteq} Q\right\}$$

                The last inclusion is equivalent to

                $$(**) \iff R \cap L \subseteq R \cap Q = P \iff (R\setminus P) \cap L = \emptyset \tab (***)$$

                Using [L.1.22](../../algebra–geometry_lexicon/hilberts_nullstellensatz/5coordinate_rings/#l122) +
                [T.5.5](../localization/#t55) there exists an inclusion preserving bijection between
                again, we get that all $L \in \Spec{R[x]}$ satisfying $(***)$ and $(P)_{R[x]} \subseteq L$ correseponds
                to primes in $R_P[x]/(P_P)_{R[x]} \cong (R_P/P_P)[x]$, which is a polynomial ring over a field. Hence,
                $\dim(S/I) = 1$.


??? definition "Definition: Fiber and Fiber ring"

    ## Fiber

    Let $\phi: R \to S$ be a homomorphism of rings. Thhis induces a map

    $$
    \begin{align*}
        f : \Spec S &\to \Spec R \\
        Q &\mapsto \phi^{-1}(Q)
    \end{align*}
    $$

    For $P \in \Spec R$, the set $f^{-1}(P)$ is called the **fiber** of $f$ over $P$.

    ## Fiber ring

    $\begin{align*}
        \text{Let } & I:=(\phi(P))_S \\
        & U:= \{\phi(a) + I \ | \ a \in R\setminus P\} \subseteq S/I \\
        & S_{[P]} := U^{-1} (S/I)
    \end{align*}$

    $S_{[P]}$ is called the **fiber ring** of $\phi$ over $P$.

    !!! remark "Remark: $P \in \Specmax{R} \implies S_{[P]} \cong S/I$" 


??? proposition "Proposition 7.12"
    The map <a id="p712"></a>

    $$
    \begin{align*}
        \Phi : \Spec {S_{[P]}} &\to f^{-1}(\{P\}) \\
        \mathfrak{Q} &\mapsto \pi^{-1}(\varepsilon^{-1}(\mathfrak{Q}))
    \end{align*}
    $$

    is an inclusion preserving bijection.

    ??? proof
        Follows from [L.1.22](../../algebra–geometry_lexicon/hilberts_nullstellensatz/5coordinate_rings/#l122) +
        [T.5.5](../localization/#t55).

        $$\Im \Phi = \{Q \in \Spec S \ | \ I \subseteq Q \land U \cap (Q/I) = \emptyset\}$$

        Morepver, $P = \phi^{-1}(Q) \iff Q \in f^{-1}(\{P\})$.


??? theorem "Theorem 7.13"
    ## Fiber dimension, lower bound

    $\begin{align*}
        \text{Let } & R, S \text{ be Noetherian rings} \\
        & \phi : R \to S \text{ be a homomorphism} \\
        & Q \in \Spec R \\
        & P := \phi^{-1}(Q)
    \end{align*}$

    $$\implies \dim(S_{[P]}) \ge \ht(Q) - \ht(P)$$

    !!! proof "Proof: Omitted, as the theorem is not used"