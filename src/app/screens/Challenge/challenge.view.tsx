import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ChevronLeft, ChevronRight, Eye, RotateCcw } from "lucide-react-native";
import React, { useState } from "react";
import {
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "./challenge.styles";

const MoleculaImg = require("@/assets/images/molecula-desafio.png");

const mockQuestion = {
  textApoio: "A fórmula H2O indica que a água é composta por:",
  correctAnswer: "a",
  options: [
    { id: "a", text: "Dois átomos de hidrogênio e um de oxigênio" },
    { id: "b", text: "Dois átomos de oxigênio e um de hidrogênio" },
    { id: "c", text: "Apenas hidrogênio" },
    { id: "d", text: "Apenas oxigênio" },
  ],
};

export default function ChallengeView() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [showSupportText, setShowSupportText] = useState(false);
  const [showResolution, setShowResolution] = useState(false);
  const [showStudyTips, setShowStudyTips] = useState(false);

  const isCorrect = selected === mockQuestion.correctAnswer;

  const handleTryAgain = () => {
    setSelected(null);
    setIsSubmitted(false);
    setShowResult(false);
    setShowResolution(false);
    setShowStudyTips(false);
    setShowSupportText(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft color="#64748b" size={20} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        {!showResult ? (
          <>
            <TouchableOpacity
              style={styles.supportContainer}
              onPress={() => setShowSupportText(!showSupportText)}
            >
              <Text style={styles.supportLabel}>Texto de apoio</Text>
              <ChevronRight
                color="#3b82f6"
                size={18}
                style={showSupportText ? styles.rotateIcon : null}
              />
            </TouchableOpacity>

            {showSupportText && (
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>
                  As fórmulas químicas mostram a composição das substâncias.
                  Letras são elementos e números são quantidades.
                </Text>
              </View>
            )}

            <View style={styles.imagePlaceholder}>
              <Image
                source={MoleculaImg}
                style={{ width: 140, height: 140 }}
                contentFit="contain"
              />
            </View>

            <Text style={styles.questionText}>{mockQuestion.textApoio}</Text>

            <View style={styles.optionsList}>
              {mockQuestion.options.map((opt, index) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.optionItem,
                    selected === opt.id && styles.optionSelected,
                  ]}
                  onPress={() => !isSubmitted && setSelected(opt.id)}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      selected === opt.id && styles.radioChecked,
                    ]}
                  />
                  <Text style={styles.optionText}>
                    {String.fromCharCode(97 + index)}) {opt.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Botões de ação */}
            {!isSubmitted ? (
              <TouchableOpacity
                style={[styles.primaryBtn, !selected && styles.btnDisabled]}
                onPress={() => setIsSubmitted(true)}
                disabled={!selected}
              >
                <Text style={styles.primaryBtnText}>Responder</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.resultBtn}
                onPress={() => setShowResult(true)}
              >
                <Eye color="#3b82f6" size={20} />
                <Text style={styles.resultBtnText}>Ver Resultado</Text>
                <ChevronRight color="#3b82f6" size={20} />
              </TouchableOpacity>
            )}
          </>
        ) : (
          /* TELA DE RESULTADO */
          <View style={styles.finalResult}>
            <Text style={styles.labelHeader}>Você marcou a alternativa:</Text>
            <Text style={styles.bigLetter}>{selected?.toUpperCase()}</Text>

            <View style={styles.statusBox}>
              <Text style={styles.statusTitle}>
                Alternativas mais marcadas:
              </Text>
              <View style={styles.letterCircles}>
                {["a", "b", "c", "d"].map((l) => (
                  <View
                    key={l}
                    style={[
                      styles.circle,
                      l === mockQuestion.correctAnswer
                        ? styles.circleCorrect
                        : l === selected
                          ? styles.circleWrong
                          : {},
                    ]}
                  >
                    <Text style={styles.circleText}>{l.toUpperCase()}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={styles.accordion}
              onPress={() => setShowResolution(!showResolution)}
            >
              <Text style={styles.accordionText}>Resolução</Text>
              <ChevronRight
                color="#1e40af"
                size={20}
                style={showResolution ? styles.rotateIcon : null}
              />
            </TouchableOpacity>
            {showResolution && (
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>
                  A análise da fórmula química H₂O nos mostra O H (Hidrogênio)
                  tem o número 2, indicando dois átomos. O (Oxigênio) não possui
                  número, indicando apenas um átomo.
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.accordion}
              onPress={() => setShowStudyTips(!showStudyTips)}
            >
              <Text style={styles.accordionText}>Recomendação de estudo</Text>
              <ChevronRight
                color="#1e40af"
                size={20}
                style={showStudyTips ? styles.rotateIcon : null}
              />
            </TouchableOpacity>
            {showStudyTips && (
              <View style={styles.accordionContent}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.youtube.com/shorts/kOO40xchDWI",
                    )
                  }
                >
                  <Text style={styles.linkText}>
                    📺 Ver vídeo sobre Geometria Molecular
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.feedbackSection}>
              <Text style={styles.feedbackTitle}>
                {isCorrect ? "Parabéns!" : "Vamos com calma"}
              </Text>
              <Text style={styles.feedbackBody}>
                {isCorrect
                  ? "Excelente compreensão!"
                  : "Tente novamente para aprender!"}
              </Text>
            </View>

            {isCorrect ? (
              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => router.push("/dashboard")}
              >
                <Text style={styles.primaryBtnText}>Finalizar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.tryAgainBtn}
                onPress={handleTryAgain}
              >
                <RotateCcw color="#3b82f6" size={20} />
                <Text style={styles.tryAgainText}>Tentar novamente</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
