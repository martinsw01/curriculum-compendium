# 8 Spectral theory of compact operators
## Spectrum of a compact operator

??? theorem "Theorem 8.1"
    ### Spectrum of a compact operator <a id="t81"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & T \in K(X, X) \\
        & \K = \C
    \end{align*}$

    === "a)"
        $\Spec T$ is nonempty and excatly one of the following holds:

        - $\Spec T$ is finite
        - $\Spec T$ is countable and $\Spec T = \{\lambda_n\}_{n=1}^\infty \cup \{0\}$ with $\lambda_n \to 0$.

    === "b)"
        $$\dim X = \infty \implies 0 \in \Spec T$$

    === "c)"
        $$\lambda \in \Spec T \setminus \{0\} \implies \lambda \text{ is an eigenvalue of } T$$

    ??? proof
        === "a)"
            By [L.8.4](#l84), we have that

            $$\Spec T \subseteq \overline{B_{\|T\|}(0)}$$

            R.T.P: $|\Spec T| = \infty \implies \Spec T$ is countable.

            $\begin{align*}
                \text{Let } & A_1:=\{\lambda \in \C : \|T\| \ge |\lambda| \ge 1\} \\
                & A_i := \left\{\lambda \in \C : \frac{1}{i-1} > |\lambda| \ge \frac{1}{i}\right\} \tab i \in \N_{>1} \\
            \end{align*}$

            ??? proof "Claim: $A_i \cap \Spec K$ is finite"
                If not, it would by
                [B.W.](https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem)
                contain a nonzero accumulation point. This is a contradiction to
                [P.8.1](#p81).

            So the spectrum

            $$\implies \Spec T\setminus \{0\} = \bigcup_{i=1}^\infty (A_i \cap \Spec T)$$

            is a countable union of finite sets, hence countable. From **b)** we know that $0 \in \Spec T$.

        === "b)"
            Assume $0 \notin \Spec T$.

            $$
            \begin{align*}
                \iff & T \text{ is invertible} \\
                \iff & \overline{B_1(0)} = T^{-1}T(B_1(0)) \\
            \end{align*}
            $$

            So $\overline{B_1(0)}$ is an image of a continuous map, hence compact. Then, by
            [Riesz's lemma](https://en.wikipedia.org/wiki/Riesz%27s_lemma#Characterization_of_finite_dimension),
            $\dim X < \infty$.

        === "c)"
            This follows from index theory.

            Assume $0 \neq \lambda \in \Spec T$.

            $$
            \begin{align*}
                \implies& \lambda \I - T \text{ is not invertible} \\
                \implieshref{../index_theory/#t72}{T.7.2}& \ind(\lambda \I - T) = 0 \\
            \end{align*}
            $$

            $$\lambda \text{ is an eigenvalue } \iff \lambda \I - T \text{ is not invertible } \iff \lambda \I - T \text{ is not surjective} \iff \lambda \I - T \text{ is not injective}$$


??? example "Example: Eigenvalue problem for ODE"
    $$u' = \lambda u \tab 2\pi \text{-periodic}$$

    **Which function space?**

    $$
    \begin{align*}
        C_{2\pi,0}^1 &:= \left\{u \in C^1[0, 2\pi] :
            \begin{aligned}
                u(0) &= u(2\pi) \\
                u'(0) &= u'(2\pi) \\
                \int_0^{2\pi} u(x) dx &= 0
            \end{aligned}
        \right\} \\
        C_{2\pi, 0}&:= \left\{u \in C[0, 2\pi] :
            \begin{aligned}
                u(0) &= u(2\pi) \\
                \int_0^{2\pi} u(x) dx &= 0
            \end{aligned}
        \right\} \\
        \|u\|_{C_{2\pi,0}^1} &:=  \|u\|_\infty + \|u'\|_\infty
    \end{align*}
    $$

    **Which operator?**

    $$
    \begin{align*}
        L : C_{2\pi,0}^1 &\to C_{2\pi,0} \\
        u \mapsto u'
    \end{align*}
    $$

    Note that
    
    $$u \in C_{2\pi,0}^1 \implies \int_0^{2\pi} Lu dx = u(2\pi) - u(0) = 0$$

    Thus yields two problems:

    - Domain space $\neq$ target space
    - $L$ is not compact

    Solution: consider the inverse operation.

    **Inverse is integral operator**

    $$
    \begin{align*}
        Lu = f &\iff u' = f \\
        &\iff u \text{ is the antiderivative with zero mean} \\
        &\iff 
        \left\{\begin{aligned}
            u(x) &= \int_0^x f(s) ds - \frac{1}{2\pi} \int_0^{2\pi} \int_0^x f(s) ds dx \\
            &=\int_0^{2\pi} \left[\mathbb{1}_{[0, x]}(s) - \frac{2\pi-s}{2\pi}\right]f(s) ds \\
            &= \int_0^{2\pi} k(x, s) f(s) ds
        \end{aligned}\right.
    \end{align*}
    $$

    Now, set

    $$(Kf)(x) := \int_0^{2\pi} k(x, s) f(s) ds$$

    By construction $L^{-1} = K$. We can consider $K : C_{2\pi,0} \toself$.

    **Compactness of $K$**

    $A:=\{u\in C^1[a, b] : \|u\|_{C^1} \leq R\}$ is relatively compact in $C[a, b]$.

    - Special case of Arzela-Ascoli theorem
    - Proof: see [here](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem#Proof_of_the_Arzel%C3%A0%E2%80%93Ascoli_theorem)

[//]: # (    - Principle: bounds of higher derivatives $\implies$ compactness)

    ...

    **Spectrum of $K$**

    [T.8.1](#t81) $\implies$ $0 \in \Spec K$

    $$
    \begin{align*}
        \lambda \in \Spec K \setminus \{0\} \iff & \lambda \text{ is an eigenvalue of } K \\
        \iff & \exists\ f\neq 0 : Kf = \lambda f \\
        \iff & f = \lambda Lf \\
        \iff & \frac{1}{\lambda} f = Lf \\
        \lambda \text{ is an eigenvalue of } K \iff & \frac{1}{\lambda} \text{ is an eigenvalue of } L \\
        L f = \mu f \iff & f' = \mu f \iff f(x) = A e^{\mu x} \\
        f \in C_{2\pi,0} \implies& f(0) = f(2\pi) = 0 \\
        \overset{A\neq 0}{\implies}& 1 = e^{\mu 2\pi} \\
        \implies& \mu = ik, k \in \Z \\
        \int_0^{2\pi} f(x) dx = 0 \implies& k\neq 0 \\
        \implies& \Spec K = \left\{\frac{1}{ik} : k \in \Z \setminus \{0\}\right\} \cup \{0\}
    \end{align*}
    $$

    **Eigenfunctions**

    $\lambda = \frac{1}{ik}$

    $$\implies \ker (K- \lambda \I) = \Span\{e^{ikx}\}$$

    $\dots$


??? lemma "Lemma 8.2"
    ### Linear independence of eigenvectors <a id="t82"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a vector space} \\
        & T : X \to X \text{ be linear} \\
        & \{v_i\}_{i=1}^r \subset X \text{ be eigenvectors} \\
        & \{\lambda_i\}_{i=1}^r \subset \K \text{ be the corresponding eigenvalues s.t. } \lambda_i \neq \lambda_j \iff i \neq j \\
    \end{align*}$

    $$\implies \{v_i\}_{i=1}^r \text{ is linearly independent}$$

    ??? proof
        This is trivial for $r=1$.

        Let $r > 1$ and assume $\{v_i\}_{i=1}^r$ is linearly dependent.

        $$
        \begin{align*}
            \implies& \exists\ a_i \text{ not all of which are } 0 : \sum_{i=1}^r a_i v_i = 0 \\
            \implies& \sum_{i=1}^{r} \lambda_i a_i v_i = 0 \\
            \implies& \sum_{i=1}^{r-1} (\lambda_i - \lambda_r) a_i v_i = 0 \\
            \overset{\text{ind}}{\implies}& (\lambda_i - \lambda_r) a_i = 0 & \forall\ i \in \{1, \dots, r-1\} \\
            \implies& a_i = 0 & \forall\ i \in \{1, \dots, r-1\} \\
            \implies& a_r = 0 \tab\tab \contradiction\\
            \implies \{v_i\}_{i=1}^r \text{ is linearly independent}
        \end{align*}
        $$


??? lemma "Lemma 8.3"
    <a id="l83"></a>
    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & M, L \subseteq X \text{ be closed subspaces} \\
        & M \subsetneq L \\
        & K \in L(X, X) \\
        & T = \I - K \text{ s.t.}\\
        &T(L) \subseteq M
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\ & a \in L \text{ with } \|a\| = 1 \\
        &\|Ka - Kx\| \ge \frac{1}{2} & \forall\ x \in M
    \end{align*}
    $$

    ??? proof
        By T.2.1 (Almost orthogonal elements)

        $$
        \begin{align*}
            \exists\ & a \in L\setminus M \text{ with } \|a\| = 1 \\
            & \dist(a, M) \ge \frac{1}{2} \\
        \end{align*}
        $$

        Let $\tilde x := Ta = a - Ka \in M$.

        $$
        \begin{align*}
            \implies& Ka = a - \tilde x \\
            \implies& K a - K x = a - \tilde x - K x \\
            \implies& \|K a - K x\| \ge \dist(a, M) \ge \frac{1}{2}
        \end{align*}
        $$


??? proposition "Proposition 8.1"
    ### No nonzero accumulation points <a id="p81"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & K \in L(X, X) \text{ be compact} \\
    \end{align*}$

    $$\implies \Spec K \text{ has no accumulation point } x \neq 0$$

    ??? proof
        Assume the converse, and let $0\neq \lambda^* \in \Spec K$ be an accumulation point.

        Choose $\{\lambda_j\}$ distinct s.t. $\lambda_j \to \lambda^*$.

        $$\implies \left\|\frac{1}{\lambda_k} - \frac{1}{\lambda^*}\right\| < \varepsilon$$

        By [T.8.2](#t82), $\{v_j\}$ is linearly independent.

        Let $U_n := \Span\{v_1, \dots, v_n\}$.

        $$\overset{\text{lin. indep.}}{\implies} U_1 \subsetneq U_2 \subsetneq \dots$$

        By [T.8.3](#t83), $\exists\ x_n \in U_n\setminus U_{n-1}$ with $\|x_n\| = 1$ s.t.

        $$\left\|\frac{1}{\lambda_n} K x_n - \frac{1}{\lambda_n} K x\right\| \ge \frac{1}{2} \tab \forall\ x \in U_{n-1}$$

        $\begin{align*}
            \implies \frac{1}{2} &\le \left\|\frac{1}{\lambda_n} K x_n - \frac{1}{\lambda_n} K x_m\right\| \\
            &\le \left\|\frac{1}{\lambda^*} K x_n - \frac{1}{\lambda^*} K x_m\right\|
            + \left\|\left(\frac{1}{\lambda^*} - \frac{1}{\lambda_m}\right) K x_m\right\|
            + \left\|\left(\frac{1}{\lambda^*} - \frac{1}{\lambda_m}\right) K x_m\right\| \\
            &\le \frac{1}{\lambda^*} \left\|K x_n - K x_m\right\|
            + \varepsilon \|K\| + \varepsilon \|K\|
        \end{align*}$
        
        $\begin{align*}
            &\implies \frac{1}{2} - 2 \varepsilon \|K\| \le \frac{1}{\lambda^*} \left\|K x_n - K x_m\right\| \\
            &\implies \{K x_n\} \text{ has no convergent subsequence} \\
            &\implies K \text{ is not compact} \tab \contradiction
        \end{align*}$

        
??? lemma "Lemma 8.4"
    ### Eigenvalues are bounded by the operator norm <a id="l84"></a>

    $\begin{align*}
        \text{Let } & X \text{ be Banach} \\
        & T \in L(X, X)
    \end{align*}$
    
    $$\implies \Spec T \subseteq \{\lambda \in \C : |\lambda| \le \|T\|\}$$

    ??? proof
        Suppose $\lambda > \|T\|$.

        $$
        \begin{align*}
            \|\lambda \I - (T - \lambda \I) \| =& \|T\| \\
            <& \lambda \\
            =& \frac{1}{\|(\lambda \I)^{-1}\|} \\
            \implieshref{../invertibility/#t61}{T.6.1}& T - \lambda \I \text{ is invertible} \\
            \implies& \lambda \notin \Spec T
        \end{align*}
        $$

## Special case for compact self-adjoint operators

??? theorem "Theorem 8.2"
    ### Special case for compact self-adjoint operators <a id="t82"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & T \in L(X, X) \text{ be compact and self-adjoint}
    \end{align*}$

    === "(a)"
        There exists at most countably many eigenvalues $\lambda_j \in \K\setminus\{0\}$ s.t,

        $$|\lambda_j| \ge |\lambda_{j+1}| > 0$$

        and corresponding eigenvectors $e_j \in X$ s.t.

        **(i)** $X = \ker T \oplus \overline{\Span}\{e_j\}_{j=1}^\infty$
        
        **(ii)** $Tx = \sum_{j \ge 1} \lambda_j \langle x, e_j \rangle e_j \tab \forall\ x \in X$ 

    === "(b)"
        $X$ is separable $\implies \exists$ an orthonormal basis of $X$ consisting of the eigenvectors of $T$.

    ??? proof
        === "(a)"
            Assume without loss of generality that $T\neq 0$.

            We know that

            $$X = \ker T \oplus (\ker T)^\perp$$

            $\begin{align*}
                \href{#l85}{\text{L.8.5}} \implies & (\ker T)^\perp \text{ is invariant under } T \\
                \href{#t81}{\text{T.8.1}} \implies & \Spec T \text{ is at most countable} \\
                \href{#l86}{\text{L.8.6}} \implies & \|T\| = \sup_{\|x\| = 1} |\inner{Tx}{x}| \\
                \implieshref{#t83}{T.8.3} & \exists\ 0 \neq \lambda \text{ eigenvalue}
            \end{align*}$

            Let $E_\lambda := \{x \in X : Tx = \lambda x\}$.

            ??? proof "Claim: $E_\lambda$ is finite-dimensional}"

            $\begin{align*}
                \text{Let } & \{e_1, e_2, \dots\} \text{ be the union of the orthonormal basis of all the } E_\lambda \\
                & V:= \overline{\Span}\{e_1, e_2, \dots\} \\
                & W:= V^\perp \cap (\ker T)^\perp \text{ be the orthogonal complement of } V \text{ in } (\ker T)^\perp
            \end{align*}$

            Assume $W \neq \{0\}$.

            $$
            \begin{align*}
                \implies& T |_W \neq 0 \\
                \implieshref{#t83}{T.8.3}& \exists\ 0 \neq \mu \text{ eigenvalue of } T |_W \\
                \implies & W \not\perp V \tab \contradiction \\
                \implies & W = \{0\} \\
                \implies & V = (\ker T)^\perp
            \end{align*}
            $$


??? proposition "Proposition 8.2"
    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & T \in L(X, X) \text{ be self-adjoint}
    \end{align*}$

    **(a)** \ptspec T \subseteq \R

    **(b)** The eigenvektors are oerthogonal

    ??? proof
        === "(a)"
            Let $x, \lambda$ be an eigenvalue-eigenvektor pair s.t. $\|x\| = 1$.

            $$
            \begin{align*}
                \implies \lambda &= \inner{x}{x} \\
                &= \inner{\lambda x}{x} \\
                &= \inner{Tx}{x} \\
                &= \inner{x}{Tx} \\
                &= \inner{x}{\lambda x} \\
                &= \overline{\lambda} \inner{x}{x} \\
                &= \overline{\lambda}
            \end{align*}
            $$

        === "(b)"
            Let $(x, \lambda)$ and $(y, \mu)$ be eigenvalue-eigenvektor pairs s.t. $\lambda \neq \mu$.

            $$
            \begin{align*}
                \implies& \lambda, \mu \in \R \\
                \implies& (\lambda - \mu) \inner{x}{y} = \inner{T x}{y} - \inner{x}{T y} = 0 \\
                \implies& \inner{x}{y} = 0
            \end{align*}
            $$
        

??? lemma "Lemma 8.5"
    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & A \in L(X, X) \text{ be self-adjoint} \\
        & U \subseteq X \text{ be an invariant subspace of } A
    \end{align*}$

    $$\implies U^\perp \text{ is an invariant subspace of } A$$

    ??? proof
        $\begin{align*}
            \text{Let } & x \in U \\
            & y \in U^\perp
        \end{align*}$

        $$
        \begin{align*}
            \inner{Ay}{x} &= \inner{y}{Ax} = 0 \\
            \implies& Ay \in U^\perp
        \end{align*}
        $$


??? theorem "Theorem 8.3"
    ### Rayleigh-Ritz variational principle <a id="t83"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hiblert space} \\
        & A \in L(X, X) \text{ be self-adjoint and compact}
    \end{align*}$

    Then, either $\pm \|A\|$ is an eigenvalue of $A$.

    ??? proof
        Let $\lambda:=\sup_{\|x\| = 1} \inner{Ax}{x}$.
        
        $$\implies B:=\lambda\I - A \ge 0$$

        Let $B:=\lambda\I - A$.

        $$
        \begin{align*}
            \implieshref{#l86}{L.8.6}& \|Bx\|^2 \le \|B\| \inner{Bx}{x} & (*)\\
            \implies& \exists\ \|x_n\|=1 : \inner{Ax_n}{x_n} \to \lambda \\
            \implies& B x_n \to 0 \\
            \implies& Ax_n \to y \in X, \tab \text{ as } A \text{ is compact} \\
        \end{align*}
        $$

        ??? proof "Claim: $y\neq 0$"
            Assume $y = 0$.

            $$|\lambda| \gets |\inner{Ax_n}{x_n}| \le \|Ax_n\| \|x_n\| \to 0 \tab \contradiction$$

        ??? proof "Claim: $y$ is an eigenvalue"
            $$\lambda y \gets \lambda Ax_n \to A y \implies Ay - \lambda y = 0$$


??? lemma "Lemma 8.6"
    ### Norm of self-adjoint operators <a id="l86"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & A \in L(X, X) \text{ be self-adjoint}
    \end{align*}$

    $$\implies \|A\| = \sup_{\|x\| = 1} |\inner{Ax}{x}|$$

    ??? proof
        $$
        \begin{align*}
            \|A\| &= \sup_{\|x\| = 1} \inner{Ax}{\frac{Ax}{\|A x\|}} \\
            &\le \sup_{\|x\| = \|y\| = 1} \inner{Ax}{y} \\
            &= \frac{1}{4} \left(\sup_{\|x\| = \|y\| = 1} \inner{A(x+y)}{x+y} - \inner{A(x-y)}{x-y}\right) \\
            &\le \sup_{\|z\| = 1} \inner{Az}{z} \\
            &\le \sup_{\|z\| = 1} \|A\| \|z\|^2 = \|A\|
        \end{align*}
        $$

??? lemma "Lemma 8.7"
    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & B \in L(X, X) \text{ be self-adjoint s.t. } \inner{Bx}{x} \ge 0 \tab \forall\ x \in X \\ 
    \end{align*}$

    $$\implies \|Bx\|^2 \le \|B\| \inner{Bx}{x} \tab \forall\ x \in X$$


## Fourier representation

??? theorem "Theorem 8.4"
    ### Fourier series representation <a id="t84"></a>

    $\{e^{ikx}\}_{k \in \Z}$ is an orthonormal basis of $L^2([0, 2\pi])$.

    $$\lim_{N\to\infty} \sum_{k=-N}^N \inner{f}{e_k} e_k \in [f]$$

    ???+ proof
        Define the integral operator $K$ by

        $$Kf(x) := \int_0^{2\pi} f(s) ds - \frac{1}{2\pi} \int_0^{2\pi}\int_0^x f(s) ds dx$$

        ??? proof "Claim: $Kf\in L_0^2\tab \forall\ f \in L_0^2$"
            Moreover, $Kf$ is continuous:

            $$
            \begin{align*}
                |Kf(x) - Kf(y)| &= \left|\int_0^x f(s) ds - \int_0^y f(s) ds\right| \\
                &= \left|\int_x^y f(s) ds\right| \\
                &\le \left|\int_x^y 1^2ds\right|^\frac{1}{2} \left|\int_x^y |f(s)|^2 ds\right|^\frac{1}{2} \\
                &= \sqrt{|x-y|} \|f\|_{L^2}
            \end{align*}
            $$

        ??? proof "Claim: $K$ has the same eigenvalues as $\frac{d}{dx}$"
            Let $u, \lambda$ be an eigenfunction-eigenvalue pair of $K$.

            $$Ku = \lambda u \iff \frac{1}{\lambda}Ku \implies u \in C([0, 2\pi])$$

        ??? proof "Claim: $K : L_0^2 \to L_0^2$ is compact"
            R.T.P.: Given any bounded sequence $\{f_j\}$ in $L_0^2$, $\{Kf_j\}$ has a convergent subsequence.

            $$
            \begin{align*}
                f_j \text{ is bounded in } L^2 \implies& Kf_j \text{ is bounded in } C^{1/2}([0, 2\pi]) \\
                \implieshref{#t85}{T.8.5}& \{Kf_j\} \text{ is relatively compact in } C([0, 2\pi]) \\
                \implies& \{Kf_j\} \text{ has a convergent subsequence in } C([0, 2\pi])
            \end{align*}
            $$

        ??? proof "Claim: $iK$ is self-adjoint on $L_0^2$"
            $\begin{align*}
                \text{Let } & u, v \in C_{2\pi, 0} \\
                & f:=K u \\
                & g:=K v
            \end{align*}$

            $$
            \begin{align*}
                \implies \inner{iKu}{v} &= \int_0^{2\pi} i f\ \overline g' dx \\
                &= \int_0^{2\pi} i f\ \overline g dx - \int_0^{2\pi} i f' \overline g dx \\
                &= \int_0^{2\pi} f' \overline{ig} dx \\
                &= \int_0^{2\pi} u \overline{iKv} dx \\
                &= \inner{u}{iKv}
            \end{align*}
            $$

            So $K$ is self-adjoint on $C_{2\pi, 0}$. We have that

            - $C_{2\pi, 0}$ is dense in $L_0^2$
            - $\inner{\cdot}{\cdot}$ and $K$ are continuous.

            Thus, $K$ is self-adjoint on $L_0^2$ too.

        Then, by [T.8.2](#t82), $\{e^{ikx}\}_{k \in \Z\setminus\{0\}}$ is an orthonormal basis of $L_0^2$.

        Abolishing the zero mean requirement, we have for $f \in L^2([0, 2\pi])$ that

        - $f - \langle f \rangle \in L_0^2$
        - $\langle f \rangle \in \Span\{e_0\}$

        Hence, $\{e^{ikx}\}_{k \in \Z}$ is an orthonormal basis of $L^2([0, 2\pi])$.
            


??? definition "Definition: Hölder continuous functions"
    $\begin{align*}
        \text{Let } & \alpha \in (0, 1] \\
        & A \subseteq \R^n \text{ be compact}
    \end{align*}$

    $$
    \begin{align*}
        C^\alpha(A) &:= \left\{u \in C(A) \mid \sup_{x \neq y \in A} \frac{|u(x) - u(y)|}{|x-y|^\alpha} < \infty\right\} \\
        \|u\|_\alpha &:= \|u\|_\infty + \sup_{x \neq y \in A} \frac{|u(x) - u(y)|}{|x-y|^\alpha}
    \end{align*}
    $$
    

??? theorem "Theorem 8.5"
    $\begin{align*}
        \text{Let } & \alpha \in (0, 1] \\
        & A \in \R^n \text{ be compact}
    \end{align*}$

    $$\implies \text{ Bounded sets in } C^\alpha(A) \text{ are releatively compact in } C(A)$$

    ??? proof
        R.T.P.: Any sequence in a bounded subset $B$ of $C^\alpha(A)$ has a convergent subsequence in $C(A)$.

        $\begin{align*}
            \text{Let } & F:=\left\{f^{(\nu)}\right\}_\nu \subseteq C^\alpha(A) \text{ be bounded} \\
            & D:= \{q_1, q_2, \dots\} \subseteq A \text{ be a countable dense subset} \\
        \end{align*}$

        $$
        \begin{align*}
            \implies & \left\{f^{(\nu)}(q_1)\right\}_\nu \subseteq \K \text{ is bounded} \\
            \overset{\text{B.W.}}{\implies}& \exists\ F_1:=\left\{f^{\nu_n^{(1)}}\right\}_n \subseteq F : F_1(q_1) \text{ is a convergent subsequence} \\
            & \vdots \\
            \implies & \exists\ F_k:=\left\{f^{\nu_n^{(k)}}\right\}_n \subseteq F_{k-1} : F_k(q_k) \text{ is a convergent subsequence} \\
        \end{align*}
        $$

        Then, $f^* := \lim_{n \to \infty} f^{\nu_n^{(n)}}$ exists and is well-defined.

        ??? proof "Claim: $f^* : D \to \K$ is continuous"
            $$
            \begin{align*}
                & \left|f^{(\nu_n^{(n)})}(x) - f^{(\nu_n^{(n)})}(y)\right| \le C |x-y|^\alpha & \forall\ n \\
                &\implies \left|f^*(x) - f^*(y)\right| \le C |x-y|^\alpha \\
                &\implies f^* \text{ is continuous}
            \end{align*}
            $$

        Then, there exists a unique continuous extension $f^* : A=\overline D \to \K$.

        ??? proof "Claim: $\|f^{\nu_n^{(n)}} - f^*\|_\infty \to 0$"
            $\begin{align*}
                \text{Choose } &\delta > 0 \text{ s.t. } \delta^\alpha C \le \frac{\varepsilon}{3} \\
                & L > 0 \text{ s.t. } \\
                &\tab \dist(\{q_1, \dots, q_L\}, A) \le \delta \\
                &N > 0 \text{ s.t. } \\
                &\tab |f^{\nu_n^{(n)}}(q_k) - f^*(q_k)| \le \frac{\varepsilon}{3} & \forall\ n \ge N, k \in \{1, \dots, L\} \\
            \end{align*}$

            Given an $x \in A$, choose $q \in \{q_1, \dots, q_L\}$ s.t. $|x-q| \le \delta$.

            $$
            \begin{align*}
                \implies \left|f^{\nu_n^{(n)}}(x) - f^*(x)\right|
                &= \left |\left(f^{\nu_n^{(n)}}(x) - f^{\nu_n^{(n)}}(q)\right)
                + \left(f^{\nu_n^{(n)}}(q) - f^*(q)\right)
                + \left(f^*(q) - f^*(x)\right)\right| \\
                &\le C |x-q|^\alpha + \frac{\varepsilon}{3} + C |x-q|^\alpha \\
                &\le \varepsilon
            \end{align*}
            $$

        So the sequence has a convergent subsequence in $C(A)$.


    